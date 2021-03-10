import {Lesson} from "./models/lesson.model";
import {ACTION_SET_LESSON} from "./constants/actions.constant";

const initialState = {
    lesson: new Lesson(),
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_LESSON:
            return {
                ...state,
                lesson: action.lesson
            }
        default:
            return state;
    }
};

export default reducer;
