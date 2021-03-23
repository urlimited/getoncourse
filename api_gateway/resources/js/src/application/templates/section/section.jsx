// section.jsx (according to the file structure above)

import React, {useEffect, useState} from "react";
import "./section.css";


export const Section = ({isFullPage, header, background, content, children}) => {
    const [height, setHeight] = useState('200px');

    useEffect(() => {
        if (isFullPage)
            setHeight(window.innerHeight || document.documentElement.clientHeight ||
                document.body.clientHeight + 'px');
    }, [isFullPage]);

    return (<div className="section" style={{background, height}}>
        <div className="section__content">
            <p className="section__header">{header}</p>
            {content ?? <></>}
            {children.map((c, k) => <div key={k}>{c}</div>)}
        </div>
    </div>);
}

export default Section;
