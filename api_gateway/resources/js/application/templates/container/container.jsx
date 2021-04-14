import React from 'react'

const Container = ({children}) => {
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container
