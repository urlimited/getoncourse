import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {Lesson} from "../models/lesson.model";

/**
 *
 * @param getLessonDetails
 * @param lesson {Lesson}
 * @param setLesson
 * @param updateLesson
 * @returns {JSX.Element}
 * @constructor
 */
export const LessonContentBlock = ({lesson, setLesson, getLessonDetails, updateLesson, createLesson}) => {
    const lessonId = parseInt(useParams().lessonId);
    const courseId = parseInt(useParams().courseId);

    useEffect(() => {
        setLesson(new Lesson({
            ...lesson,
            courseId: courseId,
            id: lessonId
        }));

        if (lessonId !== 0)
            getLessonDetails(lessonId).then(r => console.log(r))
    }, [lessonId]);

    return (<>
        <div className="card">
            <div className="card-title">
                <div className="lesson-title">
                    <textarea
                        className="lesson-title__textarea"
                        onChange={e => setLesson(lesson.setName(e.target.value))}
                        value={lesson.getName()}
                        onInput={e => {
                            e.target.style.height = 'auto';
                            e.target.style.height = (e.target.scrollHeight + 'px');
                        }}
                        placeholder="Место для вашего названия..."/>
                </div>
                <div className="lesson-description">
                    <textarea
                        className="lesson-description__textarea"
                        onChange={e => setLesson(lesson.setDescription(e.target.value))}
                        value={lesson.getDescription()}
                        onInput={e => {
                            e.target.style.height = 'auto';
                            e.target.style.height = (e.target.scrollHeight + 'px');
                        }}
                        placeholder="Описание..."/>
                </div>
            </div>
            <div className="card-body">
                <ul className="lesson-content">
                    {lesson.getEduStuffs().map(
                        /**
                         *
                         * @param ed {AbstractEduStuff}
                         * @param k
                         * @returns {JSX.Element}
                         */
                        (ed, k) => (
                            <li key={k} className="lesson-content__item">
                                {ed.render()}
                                <button
                                    className="lesson-content__button-trash"
                                    onClick={e => setLesson(lesson.removeEduStuff(ed))}>
                                    <i className="fa fa-trash"/>
                                </button>
                            </li>)
                    )}
                </ul>
            </div>
            <div className="card-footer">
                <div className="lesson-manage-block">
                    {lesson.isNewLesson()
                        ? <button
                            className="lesson-manage-block__create-button"
                            onClick={e => createLesson(lesson)}>Создать новый урок</button>
                        : <button
                            className="lesson-manage-block__save-button"
                            onClick={e => updateLesson(lesson)}>Сохранить</button>
                    }

                </div>
            </div>
        </div>
    </>)
}
