import React, {useState, useEffect} from "react";
import AuthContainer from "../../../core/auth/containers/login";
import {ERROR_AUTH_FAILED} from "../../../core/auth/constants/errorsList.constant";

const Page = ({apiAuthAttempt, pageErrors, clearPageErrors}) => {
   /* const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")*/

    /*const [illegalFields, setIllegalFields] = useState([]);

    const validatePageFields = () => {
        const _illegalFields = [];

        // Empty check
        [
            {label: "email", value: email},
            {label: "pass", value: pass},
        ].forEach(field => {
            if (field.value === "")
                _illegalFields.push({label: field.label, msg: "Please, fill in this field"});
        });

        setIllegalFields(_illegalFields);

        showErrors(_illegalFields)

        if (_illegalFields.length === 0)
            apiAuthAttempt(email, pass);
    }

    const showErrors = (errors) => {
        clearPageErrors();

        ["email", "pass"]
            .forEach(id => $(`#${id}-error`).hide());

        // Show only illegal fields errors
        errors.forEach(error => {
            const element = $(`#${error.label}-error`);
            element.html(`<i class="icon-cancel-circle2 mr-2"/> ${error.msg}`);
            element.show();
        })
    }*/

    return (
        <div id="mt-screen" style={{backgroundImage: "url('/images/skyscrapper.png')"}}>
            <div className="mt-screen-center">
                <div id="login">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form_header">
                                <h1>KPMG Assessment System</h1>
                            </div>
                            <div className="form_body">
                                <div className="row">
                                    <div className="col-md-12 email mt-3">
                                        <input type="text" className="form-control" placeholder="Your email" value={email}
                                            onChange={e => setEmail(e.target.value)}/>
                                        <span className="form-text text-danger" id={"email-error"}/>
                                    </div>
                                    <div className="col-md-12 password mt-3">
                                        <input type="password" className="form-control" placeholder="Your password" value={pass}
                                            onChange={e => setPass(e.target.value)}/>
                                        <span className="form-text text-danger" id={"pass-error"}/>
                                    </div>
                                    <div className="col-md-12 send-button mt-3">
                                        <button className="btn btn-primary form-control"
                                                onClick={e => validatePageFields()}>Sign in</button>
                                    </div>
                                    <div className="col-md-12">
                                        {pageErrors.length > 0 ? <span className="form-text text-danger" id={"auth-error"}>
                                        {pageErrors.find(error => error.name === ERROR_AUTH_FAILED).content}
                                    </span> : <></>}
                                    </div>
                                </div>
                            </div>
                            <div className="form_footer mt-3">
                                <a className="mt-subtext">Forget the password ?</a>
                            </div>
                        </div>
                        <div className="col-md-7"><img src="" alt=""/></div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default AuthContainer(Page);
