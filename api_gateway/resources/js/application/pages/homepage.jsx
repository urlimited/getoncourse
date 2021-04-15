import React from "react";

import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";


export const Homepage = () => {
    const data = [
        {
            type: "section",
            header: "BEM methodology",  // custom parameter
            children: [
                {
                    type: "button",
                    title: "Cick 1",
                    clickHandler: () => console.log('clicked button 1')
                },
                {
                    type: "button",
                    title: "Cick 2",
                    clickHandler: () => console.log('clicked button 2')
                }
            ],
            isFullPage: true,           // custom parameter
            background: '#cecece'       // custom parameter
        },
        {
            type: "section",
            header: "Something else",   // custom parameter
            isFullPage: false,          // custom parameter
            background: '#ababab'       // custom parameter
        }
    ];

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}

export default Homepage;
