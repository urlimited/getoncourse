import {MRouter} from "../core/mrouter/MRouter";
import {MRoute} from "../core/mrouter/MRoute";

export const ROUTE_TO_LOGIN_PAGE_NAME = "login";
export const ROUTE_TO_MAIN_PAGE_NAME = "main_page";
export const ROUTE_TO_DASHBOARD_PAGE_NAME = "dashboard";
export const ROUTE_TO_COURSES_PAGE_NAME = "courses";
export const ROUTE_TO_COURSE_DETAILS_PAGE_NAME = "courses_details";
export const ROUTE_TO_LESSONS_PAGE_NAME = "lessons";
export const ROUTE_TO_LESSON_DETAILS_PAGE_NAME = "lessons_details";
export const ROUTE_TO_LESSON_CREATE_PAGE_NAME = "lesson_create"

export const ROUTE_TO_LOGIN_PAGE = "/login";
export const ROUTE_TO_MAIN_PAGE = "/";
export const ROUTE_TO_DASHBOARD_PAGE = "/dashboard";
export const ROUTE_TO_COURSES_PAGE = "/courses";
export const ROUTE_TO_COURSE_DETAILS_PAGE = ROUTE_TO_COURSES_PAGE + "/:courseId";
export const ROUTE_TO_LESSONS_PAGE = ROUTE_TO_COURSE_DETAILS_PAGE + "/lessons";
export const ROUTE_TO_LESSON_DETAILS_PAGE = ROUTE_TO_LESSONS_PAGE + "/:lessonId";
export const ROUTE_TO_LESSON_CREATE_PAGE = ROUTE_TO_LESSONS_PAGE + "/asd/:lessonId";


//Routes for courses
export const ROUTE_TO_COURSES = '/courses'

const router = MRouter.initRouter({basePath: ''});
router.addRoute(new MRoute({name: ROUTE_TO_LOGIN_PAGE_NAME, path: ROUTE_TO_LOGIN_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_DASHBOARD_PAGE_NAME, path: ROUTE_TO_DASHBOARD_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_MAIN_PAGE_NAME, path: ROUTE_TO_MAIN_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_COURSES_PAGE_NAME, path: ROUTE_TO_COURSES_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_COURSE_DETAILS_PAGE_NAME, path: ROUTE_TO_COURSE_DETAILS_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_LESSONS_PAGE_NAME, path: ROUTE_TO_LESSONS_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_LESSON_DETAILS_PAGE_NAME, path: ROUTE_TO_LESSON_DETAILS_PAGE}));
router.addRoute(new MRoute({name: ROUTE_TO_LESSON_CREATE_PAGE_NAME, path:ROUTE_TO_LESSON_CREATE_PAGE}))
