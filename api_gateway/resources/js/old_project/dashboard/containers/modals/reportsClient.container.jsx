import {connect} from "react-redux";
import {ReportsClientModal} from "../../modals/reportsClient.modal"
import {apiCreateReport} from "../../requests/reportCreate.request";
import {apiGetReports} from "../../requests/getReports.request";
import {apiGetCriteriaAll} from "../../requests/getAllCriteria.request";
import {apiCloseReport} from "../../requests/reportClose.request";

const mapStateToProps = (state, ownProps) => ({
    reportTypes: state.data.reportTypes,
    criteria: state.data.criteria,
    sections: state.data.sections,
    currentReport: state.pageData.pageSettings.currentReport
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createReport: (data) => dispatch(apiCreateReport(data)),
    getReports: () => dispatch(apiGetReports()),
    getCriteria: () => dispatch(apiGetCriteriaAll()),
    closeReport: (reportId) => dispatch(apiCloseReport({report_id: reportId}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportsClientModal);
