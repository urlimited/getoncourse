import React, {useEffect, useState} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {MRouter} from "../../core/mrouter/MRouter";
import {Link, useParams} from "react-router-dom";
import * as routes from "../routes";


export const CourseDetailsPage = ({getLessons, updateLesson}) => {
    const router = MRouter.initRouter({basePath: ''});

    const courseId = parseInt(useParams().courseId);
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lessonSelected, setLessonSelected] = useState([])

    useEffect(() => {
        setLoading(true)
        getLessons(courseId).then(r => {
            setLessons(r.message.lessons)
            setLoading(false)
        })
    }, []);

    const dataTableCustomStyles = {
        headRow: {
            style: {
                borderBottom: 'none !important',
                marginBottom: '-10px !important'
            }
        },
        rows: {
            style: {
                minHeight: '56px',
                borderBottom: 'none !important',
                marginTop:'10px'
            }
        },
        cells: {
            style: {

            }
        }
    }

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
                        nameProcessed: <Link to={router.getRoute(routes.ROUTE_TO_LESSON_DETAILS_PAGE_NAME, {courseId, lessonId: l.id})}>{l.name}</Link>,
                        actions: <>
                            <button className="btn btn-outline-success waves-effect waves-light btn-sm mr-2"
                                    onClick={() => {
                                        (new bootstrap.Modal(document.getElementById('edit-lesson'))).show();
                                        setLessonSelected(l);
                                    }}>
                                <i className="fa fa-fw fa-edit"/>
                            </button>
                            <button className="btn btn-outline-danger waves-effect waves-light btn-sm"
                                    onClick={() => {
                                        (new bootstrap.Modal(document.getElementById('lesson-delete-confirmation'))).show();
                                        setLessonSelected(l);
                                    }}>
                                <i className="fa fa-fw fa-trash"/>
                            </button>
                        </>
                    })),
                    customStyles: dataTableCustomStyles,
                    createButton: {
                        type: "button",
                        title: "Добавить урок",
                        classes: ["btn-sm", "btn-primary"],
                        routeLink: {
                            routeValue: routes.ROUTE_TO_LESSON_DETAILS_PAGE_NAME,
                            routeParams: {courseId, lessonId: 0}
                        }
                    },
                    pageLoader: loading
                },
                {
                    type: "button",
                    title: "Статистика уроков",
                    col: 4,
                    classes: ["btn-sm", 'btn-primary']
                }
            ]
        },
        {
            type: "modal",
            id: "edit-lesson",
            title: "Управление уроком",
            body: <div className="form-row">
                <div className="col-12 col">
                    <div className="mb-3">
                        <div className="form-group">
                            <label htmlFor="lesson_name">Название урока:</label>
                            <input name="lesson_name" required="" id="lesson_name"
                                   type="text"
                                   className="is-untouched is-pristine av-invalid form-control"
                                   value={lessonSelected.name}
                                   onChange={e => setLessonSelected({
                                       ...lessonSelected,
                                       name: e.target.value
                                   })}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col">
                    <div className="mb-3">
                        <div className="form-group">
                            <label htmlFor="lesson_description">Описание урока:</label>
                            <textarea name="lesson_description" required="" id="lesson_description"
                                      minLength={225}
                                      rows={4}
                                      value={lessonSelected.description}
                                      onChange={e => setLessonSelected({
                                          ...lessonSelected,
                                          description: e.target.value
                                      })}
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
                           updateLesson(lessonSelected)
                                    .then(r => setLessons(lessons.map(l => {
                                        if (l.id !== lessonSelected.id)
                                            return l;

                                        return lessonSelected
                                    })));
                            bootstrap.Modal.getInstance(document.getElementById('edit-lesson')).hide();
                        }}>Сохранить</button>
            ]
        },
        ,
        {
            type: 'modal',
            id: 'lesson-delete-confirmation',
            title: 'Подтверждение удаления',
            body: <div className="form-row">
                <div className="col-12 col">
                    <div className="mb-3">
                        <div className="form-group">
                            <p>Вы точно хотите удалить урок?</p>
                        </div>
                    </div>
                </div>
            </div>,
            buttons: [
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" key={"key-1"}>Отмена</button>,
                <button type="button" className="btn btn-primary" key={"key-2"}
                        onClick={e => {
                            bootstrap.Modal.getInstance(document.getElementById('lesson-delete-confirmation')).hide();
                        }}>Да</button>
            ],
            size:"md"

        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
