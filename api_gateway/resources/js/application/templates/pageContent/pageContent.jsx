import React from 'react'
import PageContent__header from "./__header/pageContent__header";
import PageContent__body from "./__body/pageContent__body";
import "./require.css";

const PageContent = ({children, title}) => {

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <PageContent__header title={title} />
                    <PageContent__body children={children} />
                </div>
            </div>
        </div>
    )
}

export default PageContent
