import {connect} from "react-redux";
import {CreateCourseModal} from "../modals/createCourse.modal";

const mapStateToProps = (state, ownProps) => ({
    selectedCourse: state.pageData.pageSettings.selectedCourse,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourseModal);
