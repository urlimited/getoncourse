import {connect} from "react-redux";
import {LessonDetailsPage} from "../pages/lessonDetais.page";

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return ({

    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LessonDetailsPage);
