import React, {useEffect, useState} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {MRouter} from "../../core/mrouter/MRouter";
import {Link, useParams} from "react-router-dom";
import * as routes from "../routes";


export const CourseDetailsPage = ({getLessons}) => {
    const router = MRouter.initRouter({basePath: ''});

    const courseId = parseInt(useParams().courseId);

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        getLessons(courseId).then(r => {
            setLessons(r.message.lessons)
        })
    }, []);

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
            title: "Модуль курсов",
            children: [
                {
                    type: "dataTable",
                    title: "Программа курса",
                    col: 8,
                    columns: columns,
                    data: lessons.map(l => ({
                        ...l,
                        nameProcessed: <Link to={router.getRoute(routes.ROUTE_TO_LESSON_DETAILS_PAGE_NAME, {courseId, lessonId: l.id})}>{l.name}</Link>
                    }))
                }
            ]
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
