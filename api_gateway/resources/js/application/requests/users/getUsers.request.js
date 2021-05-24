import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import {AuthFailedException} from "../../../core/auth/exceptions";
import {DefaultRequest} from "../../../core/defaults/models/request.model";
import {UserFactory} from "../../models/user.model";
import {Response} from "../../../core/defaults/models/response.model";
import {API_GET_USERS} from "../../constants/urls.constant";

export const apiGetUsersRequest = () => dispatch => {
    dispatch(core_events.eventInitRequest());
    return fetch((API_GET_USERS), (new DefaultRequest()).setParams({
        method: "get",
    }).getRequest()).then(response => {
        if (response.status === 401)
            throw new AuthFailedException();

        return response.json()
    }, e => dispatch(events.eventConnectionError()))
        .then(json => {
            return new Response({
                status: 200,
                message: _processRequest(json.users)
            });
        }, e => dispatch(events.eventAuthFailed(false, false)));
}

export const _processRequest = (data) => data.map(u => UserFactory.createUser(u));
