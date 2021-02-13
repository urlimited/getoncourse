import * as actions from "../constants/actions.constant";

const setReports = (reports) => ({
    type: actions.ACTION_SET_REPORTS,
    reports
});

export default setReports;