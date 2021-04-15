import {connect} from "react-redux";
import {Courses} from "../pages/courses";
import {apiGetAllCourses} from "../requests/getAllCourses.request";
import {apiUpdateCourse} from "../requests/updateCourse.request";
import {apiCreateCourse} from "../requests/createCourse.request";
import {apiDeleteCourse} from "../requests/deleteCourse.request";

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return ({

    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCourses: () => dispatch(apiGetAllCourses()),
    updateCourse: (course) => dispatch(apiUpdateCourse(course)),
    createCourse: (course) => dispatch(apiCreateCourse(course)),
    deleteCourse: (courseId) => dispatch(apiDeleteCourse(courseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
