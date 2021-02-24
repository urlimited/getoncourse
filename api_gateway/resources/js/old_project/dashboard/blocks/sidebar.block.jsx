import React, {useEffect} from "react";
import * as routes from "../../routes";
import {Link} from "react-router-dom";
import {NotLoadedUser} from "../../auth/models/user.model";

export const SidebarBlock = ({user, reportTypes, getReportTypes, initSidebar}) => {
    useEffect(() => {
        if (!(user instanceof NotLoadedUser))
            initSidebar();
    }, [user]);

    useEffect(() => {
        getReportTypes();
    }, []);

    return (
        <div className="mt-sidebar sidebar bg-white sidebar-main sidebar-expand-md">

            <div className="sidebar-mobile-toggler text-center">
                <a href="#" className="sidebar-mobile-main-toggle">
                    <i className="icon-arrow-left8"/>
                </a>
                Navigation
                <a href="#" className="sidebar-mobile-expand">
                    <i className="icon-screen-full"/>
                    <i className="icon-screen-normal"/>
                </a>
            </div>


            <div className="sidebar-content">
                <div className="card card-sidebar-mobile">
                    <ul className="nav nav-sidebar" data-nav-type="accordion">
                        <li className="nav-item-header">
                            <div className="text-uppercase font-size-xs line-height-xs">Разделы</div>
                            <i className="icon-menu" title="Main"/>
                        </li>

                        {user.isStaff()
                            ? <li className="nav-item nav-item-submenu">
                                <a className="nav-link"><i className="icon-copy"/> <span>Типы отчетов</span></a>
                                <ul className="nav nav-group-sub" data-submenu-title="reports"
                                    style={{display: "none"}}>
                                    {reportTypes.map(reportType => <li className="nav-item">
                                        <Link to={routes.ROUTE_TO_REPORTS_MANAGEMENT + reportType.id}
                                              className="nav-link">
                                            <span
                                                className="badge bg-transparent align-self-center ml-auto">{reportType.name}</span>
                                        </Link>
                                    </li>)}
                                </ul>
                            </li>
                            : <></>}

                        {user.isClient()
                            ? <>
                                {reportTypes.map(reportType =>
                                    <li className="nav-item">
                                        <Link to={routes.ROUTE_TO_REPORTS + reportType.id} className="nav-link">
                                            <i className="icon-copy"/>
                                            <span>{reportType.name}</span>
                                        </Link>
                                    </li>
                                )}

                                <li className="nav-item">
                                    <Link to={routes.ROUTE_TO_REPORTS} className="nav-link">
                                        <i className="icon-copy"/>
                                        <span>Все отчеты</span>
                                    </Link>
                                </li>
                            </>
                            : <></>}
                    </ul>
                </div>
            </div>
        </div>
    )
}