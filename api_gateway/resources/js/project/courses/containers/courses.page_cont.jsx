import {connect} from "react-redux";
import {apiGetAllCourses} from "../../dashboard/requests/getAllCourses.request";
import setPageSettings from "../../../core/pageSettings/actions/setPageSettings";
import {CoursesPage} from "../pages/courses.page";

const mapStateToProps = (state, ownProps) => {
    console.log(state);

    return ({
        courseSelected: state.pageData.pageSettings.courseSelected,
        pageSettings: state.pageData.pageSettings
    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCourses: () => dispatch(apiGetAllCourses()),
    setSelectedCourse: (course) => dispatch(setPageSettings({selectedCourse: course}))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
