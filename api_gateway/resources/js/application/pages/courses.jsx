import React, {useEffect, useState} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {Course} from "../models/course.model";


export const Courses = ({getCourses}) => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(new Course());

    useEffect(() => {
        getCourses().then(r => setCourses(r.message));
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
            type: "header",
        },
        {
            type: "sidebar"
        },
        {
            type: "pageContent",
            title: "Courses list",
            children: [
                {
                    type: "dataTable",
                    data: courses.map(c => ({
                        ...c,
                        nameProcessed: <p>{c.name}</p>,
                        authorProcessed: <p>{c.authorId}</p>,
                        actions: <>
                            <button className="btn btn-outline-success waves-effect waves-light btn-sm mr-2"
                                    onClick={() => setSelectedCourse(c)}>
                                <i className="fa fa-fw fa-edit"/>
                            </button>
                            <button className="btn btn-outline-danger waves-effect waves-light btn-sm"
                                    onClick={()=>{
                                        /*deleteCourse(c.id).
                                        then(r=>setCourses(courses.filter(
                                            c_in=>c_in.id !== c.id
                                        )))*/
                                    }}>
                                <i className="fa fa-fw fa-trash"/>
                            </button>
                        </>
                    })),
                    columns: columns,
                    title: "Список курсов",
                    col: 8
                }
            ]
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
