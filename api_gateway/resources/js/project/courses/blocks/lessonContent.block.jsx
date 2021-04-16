import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";

/**
 *
 * @param getLessonDetails
 * @param lesson {Lesson}
 * @param setLesson
 * @returns {JSX.Element}
 * @constructor
 */
export const LessonContentBlock = ({lesson, setLesson, getLessonDetails}) => {
    const lessonId = parseInt(useParams().lessonId);

    useEffect(() => {
        if (lessonId !== 0)
            getLessonDetails(lessonId).then(r => console.log(r))
    }, [lessonId]);


    return (<>
        <div className="card">
            <div className="card-title">
                <p>Содержимое урока</p>
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
                                onClick={e => setLesson(lesson.removeEduStuff(ed))}
                            >
                                <i className="fa fa-trash" />
                            </button>
                        </li>)
                    )}
                </ul>
            </div>
        </div>
    </>)
}
