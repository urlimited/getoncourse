import * as constants from "../../../application/constants/urls.constant";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import {AuthFailedException} from "../../../core/auth/exceptions";
import {DefaultRequest} from "../../../core/defaults/models/request.model";
import {Response} from "../../../core/defaults/models/response.model";
import {Lesson} from "../../models/lesson.model";

export const apiUpdateLesson = (lesson) => dispatch => {
    dispatch(core_events.eventInitRequest());

    return fetch(constants.API_LESSON_UPDATE_LESSON, (new DefaultRequest()).setParams({
        /*headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },*/
        body: _preProcessData(lesson),
        method: "post"
    }).getRequest()).then(response => {
            if (response.status === 401)
                throw new AuthFailedException();

            //TODO: Обработать 422 статус
            dispatch(core_events.eventRequestProcessed());

            return response.json()
        },
        e => dispatch(events.eventConnectionError()))
        .then(json => {

            return new Response({
                status: 200,
                message: _postProcessData(json.lesson)
            })
        }, e => dispatch(events.eventAuthFailed()))
}

const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const _preProcessData = (data) => {
    const formData = new FormData();

    // hack for PUT with formdata
    formData.append('_method', 'put');

    return Object.keys(data)
        .filter(key => (data[key] !== undefined && data[key] !== null && data[key] !== ''))
        .reduce((accum, nextKey) => {
            if(nextKey === 'files'){
                console.log(data[nextKey]);

                for(let file of data[nextKey]){
                    formData.append('image_files[]', file);
                }

                return formData;
            }

            formData.append(camelToSnakeCase(nextKey), data[nextKey])
            return formData;
        }, formData);
}

const _postProcessData = (data) => new Lesson(data);
