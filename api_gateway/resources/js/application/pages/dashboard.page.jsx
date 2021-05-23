import React from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";


export const DashboardPage = ({}) => {

    const data = [
        {
            type: "pageContent",
            title: "Dashboard",
            children: [
                {
                    type:"button",
                    title: "Dashboard",
                    classes: ["btn", "btn-primary"]
                }
            ]
        }
    ];

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
