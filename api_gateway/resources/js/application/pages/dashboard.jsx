import React from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";


export const Dashboard = () => {

    const data = [
        {
            type: "header",
        },
        {
            type: "sidebar"
        },
        {
            type: "container",
            children: [
                {
                    type: "title",
                    title: "Dashboard"
                },
                {
                    type: "card"
                }
            ]
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
