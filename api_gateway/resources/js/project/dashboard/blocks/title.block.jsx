import React from "react";
import {useLocation} from 'react-router-dom'

export const TitleBlock = ({title}) => {
    const location = useLocation()
    const breadcrumbs = location.pathname.split('/')
    return (
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between"><h4
                        className="mb-0 font-size-18">{title}</h4>
                        <div className="page-title-right">
                            <nav className="" aria-label="breadcrumb">
                                <ol className="breadcrumb m-0">
                                    {breadcrumbs.map(breadcrumb=>
                                        <li className="breadcrumb-item">
                                            <a href="/dashboard">{breadcrumb.toUpperCase()}</a>
                                        </li>)
                                    }
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    )
}
