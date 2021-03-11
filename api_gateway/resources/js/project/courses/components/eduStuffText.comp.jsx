import React, {useState, useEffect} from 'react'
import {LessonManager} from "../models/lessonManager.model";

/**
 * EduStuff textarea component
 * @param eduStuff {EduStuffText}
 * @param eduStuff.content {string}
 * @param lessonManager {LessonManager}
 * @param setLesson {function}
 * @param setEduStuff {function}
 * @returns {JSX.Element}
 * @constructor
 */
export const EduStuffTextComponent = ({eduStuff, lessonManager, setLesson, setEduStuff}) => {
    const [localContent, setLocalContent] = useState(eduStuff.content);

    useEffect(() => {
        //TODO: пересмотреть модель разделения redux и react состояний
        setLocalContent(eduStuff.content);
    }, [eduStuff.id]);

    const createNewEduStuff = () => {
        setLesson(lessonManager.getLesson());

        lessonManager.setLesson(lessonManager.getLesson());

        setLocalContent('');
    }

    return (<>
        <div className="edustuff-text">
            <textarea
                className="edustuff-text__textarea"
                onBlur={e => {
                    setEduStuff(eduStuff.setContent(e.target.value))
                }}
                onChange={e => {
                    setLocalContent(e.target.value);
                    if (lessonManager.isEduStuffAddedToLesson(e.target.value, eduStuff))
                        createNewEduStuff();
                }}
                onInput={e => {
                    e.target.style.height = 'auto';
                    e.target.style.height = (e.target.scrollHeight + 'px');
                }}
                placeholder="Начните вводить текст..."
                value={localContent}
            />
        </div>
    </>)
}
