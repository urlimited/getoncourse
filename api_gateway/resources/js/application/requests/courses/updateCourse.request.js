import * as constants from "../../constants/urls.constant";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import {AuthFailedException} from "../../../core/auth/exceptions";
import {DefaultRequest} from "../../../core/defaults/models/request.model";
import {Response} from "../../../core/defaults/models/response.model";
import {Course} from "../../models/course.model";

export const apiUpdateCourse = course => dispatch => {
    dispatch(core_events.eventInitRequest());

    return fetch(constants.API_COURSES_UPDATE_COURSE, (new DefaultRequest()).setParams({
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: _preProcessData(course),
        method: "put"
    }).getRequest()).then(response=>{
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
                message: _postProcessData(json.course)
            })
        }, e => dispatch(events.eventAuthFailed()))
}

const _preProcessData = (data) => {
    return Object.keys(data)
        .map(key => key + "=" + data[key])
        .reduce((accum, next) => accum + "&" + next);
}

const _postProcessData = (data) => new Course(data);
