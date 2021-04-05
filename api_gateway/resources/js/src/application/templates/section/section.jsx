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
           <p>Hello, World</p>
        </div>
    </div>);
}

export default Section;
