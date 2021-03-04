import history from "../services/history";
import {
    ROUTE_TO_LOGIN_PAGE, ROUTE_TO_REPORTS,
} from "../../project/routes";
import setPageError from "../pageSettings/actions/setPageError";
import {PageError} from "../pageSettings/models/PageError";
import * as errors from "./constants/errorsList.constant";
import clearPageError from "../pageSettings/actions/clearPageError";
import clearAllPageErrors from "../pageSettings/actions/clearAllPageErrors";
import {ROUTE_TO_DASHBOARD} from "../../old_project/routes";

// TODO: document that all methods started with "event" will be change state general states (api)
// TODO: make extendable these events for different projects
export const eventAuthSuccess = (userData) => dispatch => {
    //if (userData.role_id === 1)
        history.push(ROUTE_TO_DASHBOARD);
    dispatch(clearAllPageErrors());
};

export const eventAuthFailed = (isRedirectRequired, isShowErrors = true) => dispatch => {
    dispatch(clearPageError(errors.ERROR_AUTH_FAILED));

    if (isShowErrors)
        dispatch(setPageError(new PageError(errors.ERROR_AUTH_FAILED, "Login and/or password are incorrect")));

    if (isRedirectRequired)
        history.push(ROUTE_TO_LOGIN_PAGE);
};

export const eventConnectionError = () => dispatch => {
    dispatch(clearPageError(errors.ERROR_CONNECTION_ABORTED));
    dispatch(setPageError(new PageError(errors.ERROR_CONNECTION_ABORTED)));
};
