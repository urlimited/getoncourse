import * as actions from "../constants/actions.constant";

const setCourses = (courses) => ({
    type: actions.ACTION_SET_COURSES,
    courses: courses
});

export default setCourses;
