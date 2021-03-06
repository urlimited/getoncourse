import {connect} from "react-redux";
import {BreadcrumbsBlock} from "../../blocks/breadcrumbs.block";

const mapStateToProps = (state, ownProps) => ({
    breadcrumbs: state.pageData.pageSettings.breadcrumbs ?? []
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbsBlock);