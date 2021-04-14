import * as actions from "../constants/actions.constant";
import {Lesson} from "../models/lesson.model";

const setLesson = (lesson) => ({
    type: actions.ACTION_SET_LESSON,
    lesson: new Lesson({...lesson})
});

export default setLesson;
