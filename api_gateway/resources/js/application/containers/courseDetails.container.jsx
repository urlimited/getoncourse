import {connect} from "react-redux";
import {CourseDetailsPage} from "../pages/courseDetais.page";
import {apiGetCourseDetails} from "../requests/courses/getCourseDetails.request";
import {apiUpdateLesson} from "../requests/lessons/updateLesson.request";

const mapStateToProps = (state, ownProps) => {
    return ({

    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getLessons: (courseId) => dispatch(apiGetCourseDetails(courseId)),
    updateLesson: (lesson) => dispatch(apiUpdateLesson(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsPage);
