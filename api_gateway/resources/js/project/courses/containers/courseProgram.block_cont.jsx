import {connect} from "react-redux";
import {CourseProgramBlock} from "../blocks/courseProgram.block";

const mapStateToProps = (state, ownProps) => ({
    pageSettings: state.pageData.pageSettings
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CourseProgramBlock);
