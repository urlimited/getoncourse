import {connect} from "react-redux";
import {apiGetCriteriaBySection} from "../../requests/getCriteriaBySection.request";
import {SingleReportClientSectionPage} from "../../pages/singleReportClientSection.page";
import {apiUpdateReport} from "../../requests/reportUpdate.request";
import {apiGetReportDetails} from "../../requests/getReportDetails.request";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";
import {ROUTE_TO_SINGLE_REPORT} from "../../../routes";
import {apiGetSectionsByReportId} from "../../requests/getSectionsByReportId.request";

const mapStateToProps = (state, ownProps) => ({
    criteria: state.data.criteria,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCriteria: (sectionId) => dispatch(apiGetCriteriaBySection(sectionId)),
    getSectionsByReport: (reportId) => dispatch(apiGetSectionsByReportId(reportId)),
    updateReport: (data) => dispatch(apiUpdateReport(data)),
    getReportDetails: (reportId) => dispatch(apiGetReportDetails(reportId)),
    setPageBreadcrumbs: (report, section) => dispatch(setPageSettings({breadcrumbs: [
            {name: report.type, link: ROUTE_TO_SINGLE_REPORT + report.id},
            {name: section.name, link: ROUTE_TO_SINGLE_REPORT + report.id + `/${section.id}`},
        ]}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleReportClientSectionPage);
