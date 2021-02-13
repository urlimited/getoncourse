import * as constants from "../constants/urls.constant";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import {AuthFailedException} from "../../../core/auth/exceptions";
import {DefaultRequest} from "../../../core/defaults/models/request.model";
import {Response} from "../../../core/defaults/models/response.model";
import {Criteria} from "../models/criteria.model";
import {
    CRITERIA_ANSWER_FULL,
    CRITERIA_ANSWER_HALF,
    CRITERIA_ANSWER_UNDEFINED,
    CRITERIA_ANSWER_ZERO
} from "../models/reportAnswer";


export const apiUpdateReport = (data) => dispatch => {
    dispatch(core_events.eventInitRequest());

    return fetch(constants.API_UPDATE_REPORT, (new DefaultRequest()).setParams({
        method: "put",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: _preProcessData(data)
    }).getRequest()).then(response => {
        if (response.status === 401)
            throw new AuthFailedException();

        dispatch(core_events.eventRequestProcessed());

        return response.json()
    }, e => dispatch(events.eventConnectionError()))
        .then(json => {
            return new Response({
                status: 200,
                message: json
            })
        }, e => dispatch(events.eventAuthFailed()));
}

const _preProcessData = (data) => {
    return Object.keys(data)
        .map(key => {
            if (key === "answers")
                return data["answers"].filter(a => a.answer !== CRITERIA_ANSWER_UNDEFINED)
                    .map(k => "answers=" +
                        JSON.stringify({
                            ...k,
                            answer: {
                                [CRITERIA_ANSWER_FULL]: 2,
                                [CRITERIA_ANSWER_HALF]: 1,
                                [CRITERIA_ANSWER_ZERO]: 0,
                            }[k.answer]
                        })
                    ).reduce((accum, next) => accum + "&" + next);

            return key + "=" + data[key];
        })
        .reduce((accum, next) => accum + "&" + next);
}

const _postProcessData = (data) => data
    .map(criteria => new Criteria(criteria));
