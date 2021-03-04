import {connect} from "react-redux";
import {apiGetAllCourses} from "../../requests/getAllCourses.request";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";
import DashboardLayout from "../../pages/dashboard.layout";
import {CoursesPage} from "../../pages/courses.page";

const mapStateToProps = (state, ownProps) => ({
    modalIsOpen: state.pageData.pageSettings.modalIsOpen,
    pageSettings: state.pageData.pageSettings
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCourses: () => dispatch(apiGetAllCourses()),
    setPageModalIsActive: (bool) => dispatch(setPageSettings({modalIsOpen: bool}))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
