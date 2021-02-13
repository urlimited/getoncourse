import {connect} from "react-redux";
import {ReportsTableComponent} from "../../components/reportsTableComponent";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";
import {apiGetReports} from "../../requests/getReports.request";
import {apiCloseReport} from "../../requests/reportClose.request";

const mapStateToProps = (state, ownProps) => ({
    reports: state.data.reports
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getReports: () => dispatch(apiGetReports()),
    closeReport: (report_id) => dispatch(apiCloseReport({report_id})),
    setPageBreadcrumbs: () => dispatch(setPageSettings({breadcrumbs: []})),
    setCurrentReport: (report) => dispatch(setPageSettings({currentReport: report}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportsTableComponent);