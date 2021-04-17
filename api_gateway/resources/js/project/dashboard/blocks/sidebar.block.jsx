import React, {useEffect} from "react";
import * as routes from "../../../application/routes";
import {Link} from "react-router-dom";
import {NotLoadedUser} from "../../auth/models/user.model";

export const SidebarBlock = ({}) => {
    //console.log("sidebar")
   /* useEffect(() => {
        if (!(user instanceof NotLoadedUser))
            initSidebar();
    }, [user]);*/

    return (
        <div className="vertical-menu">
            <div data-simplebar="true" className="h-100">
                <div data-simplebar="init" style={{maxHeight: "100%"}}>
                    <div className="simplebar-wrapper" style={{margin: "0"}}>
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"/>
                        </div>
                        <div style={{right: "0", bottom: "0"}}>
                            <div className="simplebar-content-wrapper"
                                 style={{height: "auto", overflow: "hidden scroll"}}>
                                <div className="simplebar-content" style={{padding: "0"}}>
                                    <div id="sidebar-menu" className="mm-show">
                                        <ul className="metismenu list-unstyled mm-show mm-active" id="side-menu">
                                            <li className="menu-title">Menu</li>
                                            <li className="mm-active"><a className="waves-effect mm-active" href="/"
                                                                         aria-expanded="false"><i
                                                className="bx bx-home-circle"/><span
                                                className="badge badge-pill badge-info float-right">04</span><span>Dashboards</span></a>
                                                <ul className="sub-menu mm-collapse mm-show" aria-expanded="false">
                                                    <li className="mm-active"><a href="/dashboard"
                                                                                 className="active">Default</a></li>
                                                    <li><a href="/dashboard-saas">Saas</a></li>
                                                    <li><a href="/dashboard-crypto">Crypto</a></li>
                                                    <li><a href="/dashboard-blog">Blog</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-title">Courses</li>
                                            <li><Link className=" waves-effect" to={routes.ROUTE_TO_COURSES}><i
                                                className="bx bx-calendar"/><span>All Courses</span></Link>
                                            </li>
                                            <li><a className=" waves-effect" href="/chat"><i
                                                className="bx bx-chat"/><span>Chat</span></a>
                                            </li>
                                            <li><a className=" waves-effect" href="/apps-filemanager"><i
                                                className="bx bx-file"/><span
                                                className="badge badge-pill badge-success float-right">New</span><span>File Manager</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
