import {connect} from "react-redux";
import {SidebarBlock} from "../../blocks/sidebar.block";

const mapStateToProps = (state, ownProps) => ({
    reportTypes: state.data.reportTypes
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarBlock);
