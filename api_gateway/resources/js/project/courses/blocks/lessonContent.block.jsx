import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";

/**
 *
 * @param getLessonDetails
 * @param lesson {Lesson}
 * @returns {JSX.Element}
 * @constructor
 */
export const LessonContentBlock = ({getLessonDetails, lesson}) => {
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
                    {console.log(lesson.getEduStuffs())}
                    {lesson.getEduStuffs().map(
                        /**
                         *
                         * @param c {AbstractEduStuff}
                         * @param k
                         * @returns {JSX.Element}
                         */
                        (c, k) => (
                        <li key={k} className="lesson-content__item">
                            {c.render()}
                        </li>)
                    )}
                </ul>
            </div>
        </div>
    </>)
}
