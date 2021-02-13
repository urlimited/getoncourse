import React, {useEffect} from "react";

export const Loader = ({isLoading}) => {
    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    return (
        isLoading
            ? <div id={"loader"}>
                <div className="inner">
                    <i className="spinner icon-spinner10"/>
                </div>
            </div>
            : <></>
    )
}