import {connect} from "react-redux";
import {LessonContentBlock} from "../blocks/lessonContent.block";
import {apiGetLessonDetails} from "../requests/getLessonDetails.request";

const mapStateToProps = (state) => ({
    pageSettings: state.pageData.pageSettings,
    lesson: state.courses.lesson,
    courses: state.courses
});

const mapDispatchToProps = (dispatch) => ({
    getLessonDetails: (lessonId) => dispatch(apiGetLessonDetails(lessonId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonContentBlock);
