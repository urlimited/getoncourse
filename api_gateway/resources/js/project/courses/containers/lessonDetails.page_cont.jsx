import {connect} from "react-redux";
import {LessonDetailsPage} from "../pages/lessonDetails.page";

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return ({
        //eduStuffs: state.courses.eduStuffs
    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LessonDetailsPage);
