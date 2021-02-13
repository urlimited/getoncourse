import * as actions from "./constants/actions.constant";

const initialState = {
    reports: [],
    reportTypes: [],
    criteria: [],
    sections: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ACTION_SET_REPORTS:
            return {
                ...state,
                reports: action.reports
            }

        case actions.ACTION_SET_REPORT_TYPES:
            return {
                ...state,
                reportTypes: action.reportTypes
            }

        case actions.ACTION_SET_CRITERIA:
            return {
                ...state,
                criteria: action.criteria
            }

        case actions.ACTION_SET_SECTIONS:
            return {
                ...state,
                sections: action.sections
            }

        default:
            return state;
    }
};

export default reducer;