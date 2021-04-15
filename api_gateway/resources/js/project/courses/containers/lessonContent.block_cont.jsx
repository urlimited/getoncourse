import {connect} from "react-redux";
import {LessonContentBlock} from "../blocks/lessonContent.block";
import {apiGetLessonDetails} from "../requests/getLessonDetails.request";
import setLesson from "../actions/setLesson";
import {LessonManager} from "../models/lessonManager.model";
import {apiUpdateLesson} from "../requests/updateLesson.request";
import {apiCreateLesson} from "../requests/createLesson.request";

const mapStateToProps = (state) => ({
    pageSettings: state.pageData.pageSettings,
    lesson: LessonManager.initManager()
        .setLesson(state.courseModule.lesson).getLesson(),
});


const mapDispatchToProps = (dispatch) => ({
    getLessonDetails: (lessonId) => dispatch(apiGetLessonDetails(lessonId)),
    setLesson: (lesson) => dispatch(setLesson(lesson)),
    updateLesson: (lesson) => dispatch(apiUpdateLesson(lesson)),
    createLesson: (lesson) => dispatch(apiCreateLesson(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonContentBlock);
