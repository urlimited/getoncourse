import React from "react";
import {useLocation} from 'react-router-dom'

export const TitleBlock = ({title}) => {
    const location = useLocation()
    console.log("location is :",location)

    // TODO: хорошо придумал, но нужно вынести это в отдельный модуль, чтобы можно было использовать имена отличные от URL
    const breadcrumbs = location.pathname.split('/')
    return (
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between"><h4
                        className="mb-0 font-size-18">{title}</h4>
                        <div className="page-title-right">
                            <nav className="" aria-label="breadcrumb">
                                <ol className="breadcrumb m-0">
                                    {breadcrumbs.map((b, k)=>
                                        <li className="breadcrumb-item" key={k}>
                                            <a href="/dashboard">{b.toUpperCase()}</a>
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
