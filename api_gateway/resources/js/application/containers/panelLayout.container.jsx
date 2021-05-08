import {connect} from "react-redux";
import {PanelLayout} from "../pages/panel.layout";
import {apiGetUserRequest} from "../requests/auth/getUser.request.js";
import {UserFactory} from "../models/user.model";

const mapStateToProps = (state, ownProps) => ({
    user: UserFactory.createUser(state.userData)
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    getUser: () => dispatch(apiGetUserRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelLayout);
