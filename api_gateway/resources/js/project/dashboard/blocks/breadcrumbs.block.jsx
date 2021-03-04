import React from "react";
import {Link} from "react-router-dom";
import {ROUTE_TO_REPORTS} from "../../routes";

export const BreadcrumbsBlock = ({breadcrumbs}) => {
    return (
        <div className="mt-breadcrumbs breadcrumb-line breadcrumb-line-light header-elements-md-inline">
            <div className="d-flex">
                <div className="breadcrumb">
                    <Link to={ROUTE_TO_REPORTS} className="breadcrumb-item"><i className="icon-home2 mr-2"/> Отчеты</Link>
                    {breadcrumbs.map(b => (
                        <Link to={b.link} className="breadcrumb-item"> {b.name}</Link>
                    ))}
                </div>
                <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"/></a>
            </div>

            {/*
            <div className="header-elements d-none">
                <div className="breadcrumb justify-content-center">
                    <a href="#" className="breadcrumb-elements-item">
                        <i className="icon-comment-discussion mr-2"/>
                        Support
                    </a>

                    <div className="breadcrumb-elements-item dropdown p-0">
                        <a href="#" className="breadcrumb-elements-item dropdown-toggle" data-toggle="dropdown">
                            <i className="icon-gear mr-2"/>
                            Settings
                        </a>
                    </div>
                </div>
            </div>
*/}
        </div>
    )
}
