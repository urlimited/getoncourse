import {connect} from "react-redux";
import ReportsManagement from "../../pages/reportsManagement.page";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";

const mapStateToProps = (state, ownProps) => ({
    reportTypes: state.data.reportTypes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setPageBreadcrumbs: (breadcrumbs) => dispatch(setPageSettings({breadcrumbs}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportsManagement);