import React from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";


export const LessonDetailsPage = ({updateLesson}) => {
    const data = [
        {
            type: "pageContent",
            title: "Управление уроком",
            children: [
                {
                    type: "editor",
                    title: "Редактор урока",
                    apiSaveOnServer: (content) => {
                        updateLesson(content);
                    },
                    col: 12
                }
            ]
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
