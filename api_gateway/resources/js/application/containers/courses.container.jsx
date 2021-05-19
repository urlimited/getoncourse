import {connect} from "react-redux";
import {CoursesPage} from "../pages/courses.page";
import {apiGetAllCourses} from "../requests/courses/getAllCourses.request";
import {apiUpdateCourse} from "../requests/courses/updateCourse.request";
import {apiCreateCourse} from "../requests/courses/createCourse.request";
import {apiDeleteCourse} from "../requests/courses/deleteCourse.request";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCourses: () => dispatch(apiGetAllCourses()),
    updateCourse: (course) => dispatch(apiUpdateCourse(course)),
    createCourse: (course) => dispatch(apiCreateCourse(course)),
    deleteCourse: (courseId) => dispatch(apiDeleteCourse(courseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
