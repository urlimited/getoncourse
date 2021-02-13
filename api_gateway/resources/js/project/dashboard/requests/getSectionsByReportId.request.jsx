import * as constants from "../constants/urls.constant";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import {AuthFailedException} from "../../../core/auth/exceptions";
import {DefaultRequest} from "../../../core/defaults/models/request.model";
import {Response} from "../../../core/defaults/models/response.model";
import {Section} from "../models/section.model";
import setSections from "../actions/setSections";


export const apiGetSectionsByReportId = (reportId) => dispatch => {
    dispatch(core_events.eventInitRequest());

    return fetch(constants.API_GET_SECTIONS_BY_REPORT_ID + "?report_id=" + reportId, (new DefaultRequest()).setParams({
        method: "get",
    }).getRequest()).then(response => {
        if (response.status === 401)
            throw new AuthFailedException();

        dispatch(core_events.eventRequestProcessed());

        return response.json()
    }, e => dispatch(events.eventConnectionError()))
        .then(json => {
            //TODO: после того как Диас обновит get_sections_by_report_id здесь указать json.sections
            dispatch(setSections(_postProcessData(json.sections)));

            return new Response({
                status: 200,
                message: json.sections
            });
        }, e => dispatch(events.eventAuthFailed()));
}

const _preProcessData = (data) => {
    return Object.keys(data)
        .map(key => key + "=" + data[key])
        .reduce((accum, next) => accum + "&" + next);
}

const _postProcessData = (data) => data
    .map(section => {
        return new Section(section)
    });