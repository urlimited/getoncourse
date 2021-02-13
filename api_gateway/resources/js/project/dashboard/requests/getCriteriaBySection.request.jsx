import * as constants from "../constants/urls.constant";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import {AuthFailedException} from "../../../core/auth/exceptions";
import {DefaultRequest} from "../../../core/defaults/models/request.model";
import {Response} from "../../../core/defaults/models/response.model";
import {Criteria} from "../models/criteria.model";
import setCriteria from "../actions/setCriteria";


export const apiGetCriteriaBySection = (sectionId) => dispatch => {
    dispatch(core_events.eventInitRequest());

    return fetch(constants.API_GET_CRITERIA_BY_SECTION + "?section_id=" + sectionId, (new DefaultRequest()).setParams({
        method: "get",
    }).getRequest()).then(response => {
        if (response.status === 401)
            throw new AuthFailedException();

        dispatch(core_events.eventRequestProcessed());

        return response.json()
    }, e => dispatch(events.eventConnectionError()))
        .then(json => {
            dispatch(setCriteria(_postProcessData(json.criterias)));

            return new Response({
                status: 200,
                message: json.criterias
            })
        }, e => dispatch(events.eventAuthFailed()));
}

const _preProcessData = (data) => {
    return Object.keys(data)
        .map(key => key + "=" + data[key])
        .reduce((accum, next) => accum + "&" + next);
}

const _postProcessData = (data) => data
    .map(criteria => new Criteria(criteria));
