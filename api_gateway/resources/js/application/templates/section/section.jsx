import React, {useEffect, useState} from "react";
import "./section.css";


export const Section = ({isFullPage, contentSizeMod, header, background, children}) => {
    const [height, setHeight] = useState('200px');

    useEffect(() => {
        if (isFullPage)
            setHeight(window.innerHeight || document.documentElement.clientHeight ||
                document.body.clientHeight + 'px');
    }, [isFullPage]);

    return (<div className="section" style={{background, height}}>
        <p>asdasdada</p>
    </div>);
}

export default Section;
