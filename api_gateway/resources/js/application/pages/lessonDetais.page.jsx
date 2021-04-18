import React, {useEffect, useState} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {MRouter} from "../../core/mrouter/MRouter";
import {Link, useParams} from "react-router-dom";
import * as routes from "../routes";


export const LessonDetailsPage = ({getLessons}) => {
    const router = MRouter.initRouter({basePath: ''});

    const courseId = parseInt(useParams().courseId);

    const [lessons, setLessons] = useState([]);

    /*useEffect(() => {
        getLessons(courseId).then(r => {
            setLessons(r.message.lessons)
        })
    }, []);*/

    const columns = [
        {
            name: 'Название урока',
            selector: row => row.nameProcessed,
            sortable: true,
            sortFunction: (rowA, rowB) => rowA.name.localeCompare(rowB.name)
        },
        {
            name: 'Actions',
            right: true,
            selector: row => row.actions,
            width: '200px'
        },
    ];

    const data = [
        {
            type: "pageContent",
            title: "Управление уроком",
            children: [
                {
                    type: "editor",
                    title: "Редактор урока",
                    col: 9,
                    /*columns: columns,
                    data: []*/
                }
            ]
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
