import {connect} from "react-redux";
import {LessonDetailsPage} from "../pages/lessonDetais.page";
import {apiUpdateLesson} from "../requests/updateLesson.request";

const mapStateToProps = (state, ownProps) => ({});


const mapDispatchToProps = (dispatch, ownProps) => ({
    updateLesson: (data) => dispatch(apiUpdateLesson(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonDetailsPage);
