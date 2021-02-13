import React, {useState} from "react";
import {ROUTE_TO_MAIN_PAGE} from "../../routes";
import {Link} from "react-router-dom";

export const HeaderBlock = ({user, logout}) => {
    const [dropdownOpened, setDropdownOpened] = useState("");

    return (
        <div className="mt-header navbar navbar-expand-md navbar-dark">
            <div className="navbar-brand">
                <Link to={ROUTE_TO_MAIN_PAGE} className="d-inline-block">
                    <img className="mt-logo" src="/images/logo.png" alt=""/>
                    <h2 className="mt-logo-title">KPMG Assessment System</h2>
                </Link>
            </div>

            <div className="d-md-none">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
                    <i className="icon-tree5"/>
                </button>
                <button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
                    <i className="icon-paragraph-justify3"/>
                </button>
            </div>

            <div className="collapse navbar-collapse mr-0" id="navbar-mobile">
                <ul className="navbar-nav ml-md-auto">
                    <li className={"nav-item dropdown dropdown-user " + dropdownOpened}
                        onBlur={e => !$("#logout:hover").length > 0 ? setDropdownOpened("") : null}
                        onFocus={e => setDropdownOpened("show")}>
                        <a href="#" className="navbar-nav-link d-flex align-items-center dropdown-toggle"
                           data-toggle="dropdown">
                            <span>{user.name}</span>
                        </a>

                        <div className={"dropdown-menu dropdown-menu-right " + dropdownOpened}>
                            <button className="dropdown-item" onClick={e => logout()} id="#logout"><i className="icon-switch2"/> logout</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}