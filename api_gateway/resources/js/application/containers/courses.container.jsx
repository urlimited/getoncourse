import {connect} from "react-redux";
import {Courses} from "../pages/courses";
import {apiGetAllCourses} from "../requests/getAllCourses.request";

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return ({

    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCourses: () => dispatch(apiGetAllCourses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
