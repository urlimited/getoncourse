// TODO: please, document that all methods started with "api" will be sended to server (api)
import * as constants from "../constants/constants";
import * as events from "../events";
import * as core_events from "../../events";
//TODO спланировать архитектуру по модулям и core и переделать нижние строчки
import {AuthFailedException} from "../exceptions";
import {DefaultRequest} from "../../defaults/models/request.model";
import {Response} from "../../defaults/models/response.model";


export const apiAuthRequest = (login, pass) => dispatch => {
    console.log(login, pass)
    dispatch(core_events.eventInitRequest());
    return fetch(constants.API_AUTH_ATTEMPT, (new DefaultRequest()).setParams({
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "login=" + login + "&password=" + pass
    }).getRequest()).then(response => {
        if (response.status === 401)
            throw new AuthFailedException();

        return response.json()
    }, e => dispatch(events.eventConnectionError()))
        .then(json => {
            dispatch(events.eventAuthSuccess(json.user));

            return Response({status: 200, message: json});
        }, e => dispatch(events.eventAuthFailed(false)));
}
