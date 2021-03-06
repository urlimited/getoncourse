import {connect} from "react-redux";
import {EduStuffTextComponent} from "../components/eduStuffText.comp";
import {LessonManager} from "../models/lessonManager.model";
import setLesson from "../actions/setLesson";

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps.eduStuff.id);
    return ({
        pageSettings: state.pageData.pageSettings,
        lessonManager: LessonManager.initManager(state.courseModule.lesson)
    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setLesson: (lesson) => dispatch(setLesson(lesson)),
    setEduStuff: (eduStuff) => dispatch(setLesson(LessonManager.initManager().getLesson().updateEduStuff(eduStuff)))
});

export default connect(mapStateToProps, mapDispatchToProps)(EduStuffTextComponent);
