import {connect} from "react-redux";
import {SingleUserPage} from "../pages/singleUser.page";
import {apiUpdateUser} from "../requests/users/updateUser.request";
import {apiCreateUser} from "../requests/users/createUser.request";
import {UserFactory} from "../models/user.model";
import {apiGetUserRequest} from "../requests/users/getUser.request";

const mapStateToProps = (state, ownProps) => ({
    editorUser: UserFactory.createUser(state.userData)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateUser: (userData) => dispatch(apiUpdateUser(userData)),
    createUser: (userData) => dispatch(apiCreateUser(userData)),
    getUser: (userId) => dispatch(apiGetUserRequest(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserPage);
