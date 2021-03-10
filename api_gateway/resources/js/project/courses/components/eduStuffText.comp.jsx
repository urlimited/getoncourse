import React, {useState, useEffect} from 'react'
import {LessonManager} from "../models/lessonManager.model";

/**
 * EduStuff textarea component
 * @param eduStuff {EduStuffText}
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

    return (<>
        <div>
            <textarea
                value={localContent}
                onChange={e => {
                    setLocalContent(e.target.value);
                    if (lessonManager.isEduStuffAddedToLesson(e.target.value, eduStuff))
                        setLesson(lessonManager.getLesson());
                }}
                onBlur={e => setEduStuff(eduStuff.setContent(e.target.value))}
            />
            <p>{eduStuff.id}</p>
        </div>
    </>)
}
