import * as events from "../../../core/auth/events";
import {AuthFailedException} from "../../../core/auth/exceptions";
import {DefaultRequest} from "../../../core/defaults/models/request.model";
import {UserFactory} from "../../models/user.model";
import {Response} from "../../../core/defaults/models/response.model";
import {API_GET_USER} from "../../constants/urls.constant";

export const apiGetUserRequest = (userId) => dispatch => {
    return fetch((API_GET_USER + "?id=" + userId), (new DefaultRequest()).setParams({
        method: "get",
    }).getRequest())
        .then(response => {
            if (response.status === 401)
                throw new AuthFailedException();

            return response.json()
        }, e => dispatch(events.eventConnectionError()))
        .then(json => {
            return new Response({
                status: 200,
                message: _processRequest(json.user)
            });
        }, e => dispatch(events.eventAuthFailed(true, false)));
}

export const _processRequest = (data) => UserFactory.createUser(data.role, data);
