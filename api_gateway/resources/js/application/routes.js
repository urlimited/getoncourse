import {MRouter} from "../core/mrouter/MRouter";
import {MRoute} from "../core/mrouter/MRoute";

export const ROUTE_TO_LOGIN_PAGE_NAME = "login";
export const ROUTE_TO_MAIN_PAGE_NAME = "main_page";
export const ROUTE_TO_DASHBOARD_PAGE_NAME = "dashboard";
export const ROUTE_TO_COURSES_PAGE_NAME = "courses";
export const ROUTE_TO_COURSE_DETAILS_PAGE_NAME = "courses_details";
export const ROUTE_TO_LESSONS_PAGE_NAME = "lessons";
export const ROUTE_TO_LESSON_DETAILS_PAGE_NAME = "lessons_details";
export const ROUTE_TO_USERS_LIST_PAGE_NAME = "users"
export const ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME = "users_create"
export const ROUTE_TO_USERS_EDIT_USER_PAGE_NAME = "users_edit"
export const ROUTE_TO_PROFILE_PAGE_NAME = "profile"


export const ROUTE_TO_LOGIN_PAGE = "/login";
export const ROUTE_TO_MAIN_PAGE = "/";
export const ROUTE_TO_DASHBOARD_PAGE = "/dashboard";
export const ROUTE_TO_COURSES_PAGE = "/courses";
export const ROUTE_TO_COURSE_DETAILS_PAGE = "/courses/:courseId";
export const ROUTE_TO_LESSON_DETAILS_PAGE = "/courses/:courseId/lessons/:lessonId";
export const ROUTE_TO_USERS_LIST_PAGE = "/users";
export const ROUTE_TO_USERS_CREATE_NEW_PAGE = "/users/create";
export const ROUTE_TO_USERS_EDIT_USER_PAGE = "/users/edit/:userId";
export const ROUTE_TO_PROFILE_PAGE = "/profile";


export const BREADCRUMBS_DICTIONARY = {
    [ROUTE_TO_LOGIN_PAGE_NAME]: "Аутентификация",
    [ROUTE_TO_MAIN_PAGE_NAME]: "Главная",
    [ROUTE_TO_DASHBOARD_PAGE_NAME]: "Главная",
    [ROUTE_TO_COURSES_PAGE_NAME]: "Курсы",
    [ROUTE_TO_COURSE_DETAILS_PAGE_NAME]: "Детали курса",
    [ROUTE_TO_LESSON_DETAILS_PAGE_NAME]: "Детали урока",
    [ROUTE_TO_USERS_LIST_PAGE_NAME]: "Пользователи",
    [ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME]: "Создание пользователя",
    [ROUTE_TO_USERS_EDIT_USER_PAGE_NAME]: "Редактирование пользователя",
    [ROUTE_TO_PROFILE_PAGE_NAME]: "Личный кабинет",
}



const router = MRouter.initRouter({basePath: ''});
router.addRoute(new MRoute({name: ROUTE_TO_LOGIN_PAGE_NAME, path: ROUTE_TO_LOGIN_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_DASHBOARD_PAGE_NAME, path: ROUTE_TO_DASHBOARD_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_MAIN_PAGE_NAME, path: ROUTE_TO_MAIN_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_COURSES_PAGE_NAME, path: ROUTE_TO_COURSES_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_COURSE_DETAILS_PAGE_NAME, path: ROUTE_TO_COURSE_DETAILS_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_LESSON_DETAILS_PAGE_NAME, path: ROUTE_TO_LESSON_DETAILS_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_USERS_LIST_PAGE_NAME, path: ROUTE_TO_USERS_LIST_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_PROFILE_PAGE_NAME, path: ROUTE_TO_PROFILE_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME, path: ROUTE_TO_USERS_CREATE_NEW_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_USERS_EDIT_USER_PAGE_NAME, path: ROUTE_TO_USERS_EDIT_USER_PAGE}));
