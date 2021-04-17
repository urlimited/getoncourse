import React, {useEffect, useState} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {Course} from "../models/course.model";
import {Link} from "react-router-dom";
import {MRouter} from "../../core/mrouter/MRouter";
import * as routes from "../routes";


export const CoursesPage = ({getCourses, updateCourse, createCourse, deleteCourse}) => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(new Course());

    useEffect(() => {
        getCourses().then(r => setCourses(r.message));
    }, []);

    const router = MRouter.initRouter({basePath: ''});

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
                    createButton: {
                        type: "button",
                        title: "Создать курс",
                        clickHandler: () => {
                            (new bootstrap.Modal(document.getElementById('edit-course'))).show();
                            setSelectedCourse(new Course());
                        }
                    },
                    data: courses.map(c => ({
                        ...c,
                        nameProcessed: <Link to={router.getRoute(routes.ROUTE_TO_COURSE_DETAILS_PAGE_NAME, {courseId: c.id})}>{c.name}</Link>,
                        authorProcessed: <Link to={router.getRoute(routes.ROUTE_TO_COURSE_DETAILS_PAGE_NAME, {courseId: c.id})}>{c.authorId}</Link>,
                        actions: <>
                            <button className="btn btn-outline-success waves-effect waves-light btn-sm mr-2"
                                    onClick={() => {
                                        (new bootstrap.Modal(document.getElementById('edit-course'))).show();
                                        setSelectedCourse(c);
                                    }}>
                                <i className="fa fa-fw fa-edit"/>
                            </button>
                            <button className="btn btn-outline-danger waves-effect waves-light btn-sm"
                                    onClick={() => {
                                        deleteCourse(c.id).then(r => setCourses(courses.filter(c_in => c_in.id !== c.id)))
                                    }}>
                                <i className="fa fa-fw fa-trash"/>
                            </button>
                        </>
                    })),
                    columns: columns,
                    title: "Список курсов",
                    col: 8
                },
                {
                    type: "button",
                    title: "Статистика",
                    col: 4
                }
            ]
        },
        {
            type: "modal",
            id: "edit-course",
            title: "Управление курсом",
            body: <div className="form-row">
                <div className="col-12 col">
                    <div className="mb-3">
                        <div className="form-group">
                            <label htmlFor="course_name">Название курса:</label>
                            <input name="course_name" required="" id="course_name"
                                   type="text"
                                   className="is-untouched is-pristine av-invalid form-control"
                                   value={selectedCourse ? selectedCourse.name : ""}
                                   onChange={e => setSelectedCourse(new Course({
                                       ...selectedCourse,
                                       name: e.target.value
                                   }))}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col">
                    <div className="mb-3">
                        <div className="form-group">
                            <label htmlFor="course_description">Описание курса:</label>
                            <textarea name="course_description" required="" id="course_description"
                                      minLength={225}
                                      rows={4}
                                      value={selectedCourse ? selectedCourse.description : ""}
                                      onChange={e => setSelectedCourse(new Course({
                                          ...selectedCourse,
                                          description: e.target.value
                                      }))}
                                      className="form-control"
                            />
                        </div>
                    </div>
                </div>
            </div>,
            buttons: [
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" key={"key-1"}>Отмена</button>,
                <button type="button" className="btn btn-primary" key={"key-2"}
                        onClick={e => {
                            selectedCourse.isNewAddedCourse()
                                ? createCourse(selectedCourse)
                                    .then(r => setCourses([
                                        ...courses,
                                        selectedCourse
                                    ]))
                                : updateCourse(selectedCourse)
                                    .then(r => setCourses(courses.map(c => {
                                        if (c.id !== selectedCourse.id)
                                            return c;

                                        return selectedCourse
                                    })));
                            bootstrap.Modal.getInstance(document.getElementById('edit-course')).hide();
                        }}>Сохранить изменения</button>
            ],
            size: "lg"
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
