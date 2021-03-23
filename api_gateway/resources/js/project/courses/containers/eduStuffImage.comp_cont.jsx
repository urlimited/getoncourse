import {connect} from "react-redux";
import {EduStuffImageComponent} from "../components/eduStuffImage.comp";
import {LessonManager} from "../models/lessonManager.model";
import setLesson from "../actions/setLesson";

const mapStateToProps = (state, ownProps) => {
    return ({
        pageSettings: state.pageData.pageSettings,
        lessonManager: LessonManager.initManager(state.courseModule.lesson)
    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setLesson: (lesson) => dispatch(setLesson(lesson)),
    setEduStuff: (eduStuff) => dispatch(setLesson(LessonManager.initManager().getLesson().updateEduStuff(eduStuff)))
});

export default connect(mapStateToProps, mapDispatchToProps)(EduStuffImageComponent);
