import {connect} from "react-redux";
import {PanelLayout} from "../pages/panel.layout";
import {apiGetProfileRequest} from "../requests/auth/getProfile.request";
import {UserFactory} from "../models/user.model";
import {MRouter} from "../../core/mrouter/MRouter";

const mapStateToProps = (state, ownProps) => {
    return ({
        user: UserFactory.createUser(state.userData),
        currentRoute: MRouter.initRouter().getCurrentRoute()
    });
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    getUser: () => dispatch(apiGetProfileRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelLayout);
