import {connect} from "react-redux";
import DashboardLayout from "../../pages/dashboard.layout";
import {apiGetUserRequest} from "../../../auth/requests/getUser.request";
import {UserFactory} from "../../../auth/models/user.model";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";

const mapStateToProps = (state, ownProps) => {
    return ({
        user: UserFactory.createUser(state.userData),
        breadcrumbs: state.pageData.pageSettings.breadcrumbs
    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUser: () => dispatch(apiGetUserRequest()),
    setPageBreadcrumbs: (b) => dispatch(setPageSettings({breadcrumbs: b})),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
