import * as constants from "../../dashboard/constants/urls.constant";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import {AuthFailedException} from "../../../core/auth/exceptions";
import {DefaultRequest} from "../../../core/defaults/models/request.model";
import {Response} from "../../../core/defaults/models/response.model";
import {Lesson} from "../models/lesson.model";

export const apiGetLessonDetails = (lessonId) => dispatch => {
    dispatch(core_events.eventInitRequest());

    return fetch(constants.API_LESSON_DETAILS + "?" + new URLSearchParams({
        id: lessonId,
    }), (new DefaultRequest()).setParams({
        method: "get"
    }).getRequest()).then(response => {
        if (response.status === 401)
            throw new AuthFailedException();

        //TODO: Обработать 422 статус
        dispatch(core_events.eventRequestProcessed());

        return response.json()
    }, e => dispatch(events.eventConnectionError()))
        .then(json => {
            return new Response({
                status: 200,
                message: _postProcessData(json.lesson)
            })
        }, e => dispatch(events.eventAuthFailed()));
}

const _preProcessData = (data) => {
    return Object.keys(data)
        .map(key => key + "=" + data[key])
        .reduce((accum, next) => accum + "&" + next);
}

const _postProcessData = (data) => new Lesson(data);
