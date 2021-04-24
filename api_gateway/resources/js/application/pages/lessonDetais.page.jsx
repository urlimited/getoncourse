import React, {useEffect, useState} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";


export const LessonDetailsPage = ({}) => {
    const data = [
        {
            type: "pageContent",
            title: "Управление уроком",
            children: [
                {
                    type: "editor",
                    title: "Редактор урока",
                    col: 9
                }
            ]
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
