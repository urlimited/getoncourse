import React, {useState, useEffect, useRef} from "react";
import AuthContainer from "../../../core/auth/containers/login";
import {ERROR_AUTH_FAILED} from "../../../core/auth/constants/errorsList.constant";

const Page = ({apiAuthAttempt, pageErrors}) => {
    const [email, setEmail] = useState("admin@test.com")
    const [password, setPassword] = useState("localadmin")
    const [remember, setRemember] = useState(false)

    const validatePageFields = () => {
        const _illegalFields = [];
        // Empty check
        [
            {label: "email", value: email},
            {label: "password", value: password},
        ].forEach(field => {
            if (field.value === "")
                _illegalFields.push({label: field.label, msg: "Please, fill in this field"});
        });
        console.log(email)

        //setIllegalFields(_illegalFields);
        showErrors(_illegalFields)

        if (_illegalFields.length === 0)
            apiAuthAttempt(email, password);
    }

    const showErrors = (errors) => {
        // clearPageErrors();
        ["email", "password"]
            .forEach(id => document.getElementById(`${id}-error`)
                .classList.add('d-none'));

        // Show only illegal fields errors
        errors.forEach(error => {
            const el = document.getElementById(`${error.label}-error`);
            el.innerHTML = `<i class="icon-cancel-circle2 mr-2"/> ${error.msg}`;
            el.classList.remove('d-none')
        });
    }
    return (<>
        <div className="home-btn d-none d-sm-block"><a className="text-dark" href="/"><i
                className="bx bx-home h2"/></a></div>
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="overflow-hidden card">
                                <div className="bg-soft-primary">
                                    <div className="row">
                                        <div className="col-7 col">
                                            <div className="text-primary p-4">
                                                <h5 className="text-primary">Welcome Back !</h5>
                                                <p>Sign in to continue to Skote.</p>
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end col"/>
                                    </div>
                                </div>
                                <div className="pt-0 card-body">
                                    <div><a href="/">
                                        <div className="avatar-md profile-user-wid mb-4"><span
                                            className="avatar-title rounded-circle bg-light"/></div>
                                    </a></div>
                                    <div className="p-2">
                                            <div className="form-group">
                                                <div className="form-group">
                                                    <label htmlFor="username" className="">Email</label>
                                                    <input name="email" placeholder="Enter username" required=""
                                                           id="username"
                                                           type="text"
                                                           className="form-control is-untouched is-pristine av-invalid form-control"
                                                           value={email}
                                                           onChange={e => setEmail(e.target.value)}/>
                                                    <span id="email-error" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="form-group">
                                                    <label htmlFor="password" className="">Password</label>
                                                    <input name="pass" required="" placeholder="Enter password"
                                                           id="password"
                                                           type="password"
                                                           className="is-untouched is-pristine av-invalid form-control"
                                                           value={password}
                                                           onChange={e => setPassword(e.target.value)}/>
                                                    <span id="password-error" />
                                                </div>
                                            </div>
                                            <div className="custom-control custom-checkbox"><input type="checkbox"
                                                                                                   className="custom-control-input"
                                                                                                   id="customControlInline"
                                                                                                   onChange={e => setRemember(e.target.checked)}/><label
                                                className="custom-control-label" htmlFor="customControlInline"
                                            >Remember
                                                me</label>

                                            </div>
                                            <div className="mt-3">
                                                <button className="btn btn-primary btn-block waves-effect waves-light"
                                                        onClick={e => validatePageFields()}>Log In
                                                </button>
                                            </div>
                                            <div className="col-md-12">
                                                {pageErrors.length > 0 ?
                                                    <span className="form-text text-danger" id={"auth-error"}>
                                        {pageErrors.find(error => error.name === ERROR_AUTH_FAILED).content}
                                    </span> : <></>}
                                            </div>
                                            <div className="mt-4 text-center"><h5 className="font-size-14 mb-3">Sign
                                                in
                                                with</h5>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a
                                                        className="social-list-item bg-primary text-white border-primary"
                                                        href="#"><i className="mdi mdi-facebook"/></a></li>
                                                    <li className="list-inline-item"><a
                                                        className="social-list-item bg-info text-white border-info"
                                                        href="#"><i className="mdi mdi-twitter"/></a></li>
                                                    <li className="list-inline-item"><a
                                                        className="social-list-item bg-danger text-white border-danger"
                                                        href="#"><i className="mdi mdi-google"/></a></li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 text-center"><a className="text-muted" href="#"><i
                                                className="mdi mdi-lock mr-1"/> Forgot your password?</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <p>Don't have an account ? <a className="font-weight-medium text-primary"> Signup
                                    now</a></p>
                                <p>© 2021 Skote. Crafted with <i className="mdi mdi-heart text-danger"/> by
                                    Themesbrand</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default AuthContainer(Page);
