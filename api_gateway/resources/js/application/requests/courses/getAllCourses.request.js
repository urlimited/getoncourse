import * as constants from "../../constants/urls.constant";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import {AuthFailedException} from "../../../core/auth/exceptions";
import {DefaultRequest} from "../../../core/defaults/models/request.model";
import {Response} from "../../../core/defaults/models/response.model";
import {Course} from "../../models/course.model";

export const apiGetAllCourses = () => dispatch => {
    dispatch(core_events.eventInitRequest());

    return fetch(constants.API_COURSES_GET_ALL, (new DefaultRequest()).setParams({
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
                message: _postProcessData(json.courses)
            })
        }, e => dispatch(events.eventAuthFailed(true)));
}

const _postProcessData = (data) => data
    .map(course => new Course(course));
