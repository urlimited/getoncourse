import React from 'react';
import "./require.css";
import {MRouter} from "../../../../core/mrouter/MRouter";
import {MRoute} from "../../../../core/mrouter/MRoute";
import {Link} from "react-router-dom";
import {BREADCRUMBS_DICTIONARY, ROUTE_TO_MAIN_PAGE_NAME} from "../../../routes";

const PageContent__header = ({title}) => {
    const breadcrumbs = location.pathname.split('/')

    let urlString = "";

    const router = MRouter.initRouter();

    breadcrumbs.shift();

    const processedBreadcrumbs = breadcrumbs.reduce((accum, next) => {
        urlString += "/" + next;

        if(MRouter.isEligibleRoute(urlString))
            accum.push(new MRoute({
                path: urlString,
                name: router.getRouteNameFromUrl(urlString)
            }));

        return accum;
    }, []);

    processedBreadcrumbs.unshift(new MRoute({
        path: "/",
        name: ROUTE_TO_MAIN_PAGE_NAME
    }));

    return (
        <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="mb-0 font-size-18">{title}</h4>
            <div className="page-title-right">
                <nav className="" aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                        {processedBreadcrumbs.map((b, k)=>
                            <li className="breadcrumb-item" key={k}>
                                <Link to={b.path}>{BREADCRUMBS_DICTIONARY[b.name]}</Link>
                            </li>)}
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default PageContent__header
