import {connect} from "react-redux";
import {CourseDetailsPage} from "../pages/courseDetais.page";
import {apiGetCourseDetails} from "../requests/getCourseDetails.request";

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return ({

    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getLessons: (courseId) => dispatch(apiGetCourseDetails(courseId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsPage);
