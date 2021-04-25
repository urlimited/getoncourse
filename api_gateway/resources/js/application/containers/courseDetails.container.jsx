import {connect} from "react-redux";
import {CourseDetailsPage} from "../pages/courseDetais.page";
import {apiGetCourseDetails} from "../requests/getCourseDetails.request";
import {apiUpdateLesson} from "../requests/updateLesson";

const mapStateToProps = (state, ownProps) => {
    console.log("state from lessons",state);
    return ({

    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getLessons: (courseId) => dispatch(apiGetCourseDetails(courseId)),
    updateLesson: (lesson) => dispatch(apiUpdateLesson(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsPage);
