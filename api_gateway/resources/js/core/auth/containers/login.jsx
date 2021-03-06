import defaultComponent from "../loginPage.component";
import {connect} from "react-redux";
import {apiAuthRequest} from "../requests/login.request";
import clearAllPageErrors from "../../pageSettings/actions/clearAllPageErrors";

const mapStateToProps = (state, ownProps) => ({
    pageErrors: state.pageData.pageErrors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    apiAuthAttempt: (login, pass) => dispatch(apiAuthRequest(login, pass)),
    clearPageErrors: () => dispatch(clearAllPageErrors())
});


export default (component = defaultComponent) => connect(mapStateToProps, mapDispatchToProps)(component)