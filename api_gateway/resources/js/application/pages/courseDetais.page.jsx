import React, {useEffect, useState} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {MRouter} from "../../core/mrouter/MRouter";
import {Link, useParams} from "react-router-dom";


export const CourseDetailsPage = ({getLessons}) => {
    const router = MRouter.initRouter({basePath: ''});

    const courseId = parseInt(useParams().courseId);

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        getLessons(courseId).then(r => {
            console.log(r);
            setLessons(r.message)
        })
    }, []);

    const columns = [
        {
            name: 'Название курса',
            selector: row => row.nameProcessed,
            sortable: true,
            sortFunction: (rowA, rowB) => rowA.name.localeCompare(rowB.name)
        },
        {
            name: 'Автор курса',
            selector: row => row.authorProcessed,
            sortable: true,
            sortFunction: (rowA, rowB) => (rowA.authorId - rowB.authorId),
            width: '200px'
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
            title: "Модуль курсов",
            children: [
                {
                    type: "dataTable",
                    title: "Программа курса",
                    col: 8,
                    columns: columns,
                    data: lessons
                }
            ]
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
