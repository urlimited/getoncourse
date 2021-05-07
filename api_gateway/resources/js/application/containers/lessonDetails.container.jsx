import {connect} from "react-redux";
import {LessonDetailsPage} from "../pages/lessonDetais.page";
import {apiUpdateLesson} from "../requests/updateLesson.request";
import {apiGetLessonDetails} from "../requests/getLessonDetails.request.js";

const mapStateToProps = (state, ownProps) => ({});


const mapDispatchToProps = (dispatch, ownProps) => ({
    updateLesson: (data) => dispatch(apiUpdateLesson(data)),
    getLessonDetails: (lessonId) => dispatch(apiGetLessonDetails(lessonId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonDetailsPage);
