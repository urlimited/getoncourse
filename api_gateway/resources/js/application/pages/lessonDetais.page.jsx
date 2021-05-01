import React from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {Lesson} from "../models/lesson.model";
import {useParams} from "react-router-dom";


export const LessonDetailsPage = ({updateLesson}) => {
    const lessonId = parseInt(useParams().lessonId);

    const data = [
        {
            type: "pageContent",
            title: "Управление уроком",
            children: [
                {
                    type: "editor",
                    title: "Редактор урока",
                    apiSaveOnServer: (content) => {
                        updateLesson(new Lesson({
                            id: lessonId,
                            lessonBlocks: JSON.stringify(content.blocks)
                        }));
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
