import React, {useEffect, useState} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {Lesson} from "../models/lesson.model";
import {useParams} from "react-router-dom";
import {uuid} from "uuidv4";

export const LessonDetailsPage = ({updateLesson, getLessonDetails}) => {
    const lessonId = parseInt(useParams().lessonId);

    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        getLessonDetails(lessonId)
            .then(r => setBlocks(r.message.lessonBlocks));
    }, []);

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
                    editorSalt: uuid(),
                    blocksLoaded: blocks,
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
