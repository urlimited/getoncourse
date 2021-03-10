import { combineReducers } from 'redux';
import authReducer from "../core/auth/reducer";
import pageReducer from "../core/pageSettings/reducer";
import courseReducer from "../project/courses/reducer";

export default combineReducers({
    userData: authReducer,
    pageData: pageReducer,
    courses: courseReducer,
});
