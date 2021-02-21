import * as actions from "../constants/actions.constant";

const setReportTypes = (reportTypes) => ({
    type: actions.ACTION_SET_REPORT_TYPES,
    reportTypes
});

export default setReportTypes;