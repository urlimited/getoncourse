import {connect} from "react-redux";
import {CourseGeneralInfoBlock} from "../blocks/courseGeneralInfo.block";

const mapStateToProps = (state, ownProps) => ({
    pageSettings: state.pageData.pageSettings
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CourseGeneralInfoBlock);
