import {connect} from "react-redux";
import {UsersPage} from "../pages/users.page";
import {apiGetUsersRequest} from "../requests/users/getUsers.request";
import {UserFactory} from "../models/user.model";


const mapStateToProps = (state, ownProps) => ({
    accountUser: UserFactory.createUser(state.userData)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUsers: () => dispatch(apiGetUsersRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
