import {connect} from "react-redux";
import {apiGetAllCourses} from "../requests/getAllCourses.request";
import setPageSettings from "../../../core/pageSettings/actions/setPageSettings";
import {CoursesPage} from "../pages/courses.page";
import {apiDeleteCourse} from "../requests/deleteCourse.request";
import setCourses from "../actions/setCourses";

const mapStateToProps = (state, ownProps) => ({
    courseSelected: state.pageData.pageSettings.courseSelected,
    pageSettings: state.pageData.pageSettings,
    courses: state.courseModule.courses
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCourses: () => dispatch(apiGetAllCourses()),
    setSelectedCourse: (course) => dispatch(setPageSettings({selectedCourse: course})),
    deleteCourse: courseId => dispatch(apiDeleteCourse(courseId)),
    setCourses: (courses) => dispatch(setCourses(courses))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
