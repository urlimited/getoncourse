import {connect} from "react-redux";
import {SingleUserPage} from "../pages/singleUser.page";
import {apiUpdateUser} from "../requests/auth/updateUser.request";


const mapStateToProps = (state, ownProps) => ({
    user: state.userData
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateUser: (userData) => dispatch(apiUpdateUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserPage);
