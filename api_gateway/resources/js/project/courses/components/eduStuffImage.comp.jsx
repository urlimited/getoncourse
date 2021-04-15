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
export const EduStuffImageComponent = ({eduStuff, lessonManager, setLesson, setEduStuff}) => {
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
            <input
                onChange={e => {
                    console.log(e.target.files);
                    setLocalContent(e.target.value);
                }}
                type="file"
                value={localContent}
            />
            <img src={localContent} alt=""/>
        </div>
    </>)
}
