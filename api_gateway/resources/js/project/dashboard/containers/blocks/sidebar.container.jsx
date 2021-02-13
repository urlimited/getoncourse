import {connect} from "react-redux";
import {SidebarBlock} from "../../blocks/sidebar.block";
import {apiGetReportTypes} from "../../requests/getReportTypes.request";

const mapStateToProps = (state, ownProps) => ({
    reportTypes: state.data.reportTypes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getReportTypes: () => dispatch(apiGetReportTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarBlock);
