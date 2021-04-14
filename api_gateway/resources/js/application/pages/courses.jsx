import React from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";


export const Courses = () => {

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
                    title: "Courses Listss"
                }
            ]
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
