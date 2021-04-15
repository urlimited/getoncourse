import {connect} from "react-redux";
import {CourseDetailsPage} from "../pages/courseDetails.page";
import {apiGetCourseDetails} from "../requests/getCourseDetails.request";

const mapStateToProps = (state, ownProps) => ({
    pageSettings: state.pageData.pageSettings
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCourseDetails: () => dispatch(apiGetCourseDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsPage);
