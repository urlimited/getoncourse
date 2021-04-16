import React from 'react'
import "./require.css";

const PageContent__body = ({children}) => {
    console.log(children);

    return (<div className="row">
        {children.map((c, key) => (
            <div className={"col" + (c.props.media ? "-" + c.props.media : "") + (c.props.col ? "-" + c.props.col : "-12")} key={key}>
                <div className="card">
                    {c.props.title
                        ? <div className="card-title pageContent__body-title">
                            {c.props.title}
                        </div>
                        : <></>}
                    <div className="card-body">
                        {c}
                    </div>
                </div>
            </div>
        ))}
    </div>)
}

export default PageContent__body
