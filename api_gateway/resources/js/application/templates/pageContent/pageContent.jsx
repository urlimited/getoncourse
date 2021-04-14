import React from 'react'

const PageContent = ({children, title}) => {
    const breadcrumbs = location.pathname.split('/')

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
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
                    <div className="row">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageContent
