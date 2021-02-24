import {connect} from "react-redux";
import CriteriaManagement from "../../pages/criteriaManagement.page";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";

const mapStateToProps = (state, ownProps) => ({
    sections: state.data.sections,
    reportTypes: state.data.reportTypes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setPageBreadcrumbs: (breadcrumbs) => dispatch(setPageSettings({breadcrumbs}))
});

export default connect(mapStateToProps, mapDispatchToProps)(CriteriaManagement);