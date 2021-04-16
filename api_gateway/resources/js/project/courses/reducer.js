import {Lesson} from "./models/lesson.model";
import {ACTION_SET_COURSES, ACTION_SET_LESSON} from "./constants/actions.constant";

const initialState = {
    lesson: new Lesson(),
    courses: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_LESSON:
            return {
                ...state,
                lesson: action.lesson
            }
        case ACTION_SET_COURSES:
            return {
                ...state,
                courses: action.courses
            }
        default:
            return state;
    }
};

export default reducer;
