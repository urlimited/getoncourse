import {connect} from "react-redux";
import {apiGetCriteriaAll} from "../../requests/getAllCriteria.request";
import {apiGetReports} from "../../requests/getReports.request";
import {SingleReportClientPage} from "../../pages/singleReportClient.page";
import {apiGetReportDetails} from "../../requests/getReportDetails.request";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";
import {ROUTE_TO_SINGLE_REPORT} from "../../../routes";
import {apiGetSectionsByReportId} from "../../requests/getSectionsByReportId.request";
import {apiCloseReport} from "../../requests/reportClose.request";

const mapStateToProps = (state, ownProps) => ({
    criteria: state.data.criteria,
    reports: state.data.reports,
    sections: state.data.sections,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCriteria: () => dispatch(apiGetCriteriaAll()),
    closeReport: (report_id) => dispatch(apiCloseReport({report_id})),
    getSections: (reportId) => dispatch(apiGetSectionsByReportId(reportId)),
    getReports: () => dispatch(apiGetReports()),
    getReportDetails: (reportId) => dispatch(apiGetReportDetails(reportId)),
    setPageBreadcrumbs: (report) => dispatch(setPageSettings({breadcrumbs: [
            {name: report.type, link: ROUTE_TO_SINGLE_REPORT + report.id}
        ]}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleReportClientPage);
