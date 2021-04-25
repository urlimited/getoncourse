import React from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";



const  LessonCreatePage = ({}) => {
    console.log("You are here")
    const data = [
        {
            type: "pageContent",
            title: "Создание курсов",
            children: [
                {
                    type: "button",

                }
            ]
        }
    ]
    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}

export default LessonCreatePage
