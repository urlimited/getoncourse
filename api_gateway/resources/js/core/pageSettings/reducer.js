import * as actions from "./constants/actions";
import {InvalidPageErrorException} from "./exceptions/InvalidPageError.exception";
import {PageError} from "./models/PageError";
import * as constants from "../auth/constants/constants";

const initialState = {
    pageErrors: [],
    pageNotifications: [],
    pageSettings: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ACTION_SET_PAGE_ERROR:
            if(!action.pageError instanceof PageError)
                throw new InvalidPageErrorException();

            return {
                ...state,
                pageErrors: [
                    ...state.pageErrors,
                    action.pageError
                ]
            }

        case actions.ACTION_CLEAR_PAGE_ERROR:
            return {
                ...state,
                pageErrors: state.pageErrors
                    .filter(error => error.name !== action.errorName)
            }

        case actions.ACTION_CLEAR_ALL_PAGE_ERRORS:
            return {
                ...state,
                pageErrors: []
            }

        case actions.ACTION_SET_PAGE_NOTIFICATIONS:
            return {
                ...state,
                pageNotifications: action.pageNotifications
            }

        case actions.ACTION_SET_PAGE_SETTINGS:
            return {
                ...state,
                pageSettings: action.pageSettings
            }

        case constants.EVENT_REQUEST_INITIATED:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case constants.EVENT_REQUEST_PROCESSED:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
};

export default reducer;