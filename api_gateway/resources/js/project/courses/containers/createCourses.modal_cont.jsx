import {connect} from "react-redux";
import {CreateCourseModal} from "../modals/createCourse.modal";
import {apiUpdateCourse} from "../requests/updateCourse.request";
import setCourses from "../actions/setCourses";
import {apiCreateCourse} from "../requests/createCourse.request";

const mapStateToProps = (state, ownProps) => ({
    selectedCourse: state.pageData.pageSettings.selectedCourse,
    courses: state.courseModule.courses
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    editSelectedCourse: course => dispatch(apiUpdateCourse(course)),
    setCourses: (courses) => dispatch(setCourses(courses)),
    createCourse: course => dispatch(apiCreateCourse(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourseModal);
