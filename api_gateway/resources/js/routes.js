import React from 'react';
import {Provider} from "react-redux";
import {Router, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from "./project/reducers";
import {authMiddleware} from "./core/auth/middlewares";
import * as routes from "./application/routes";
import history from "./core/services/history";
import {loadState} from "./core/services/local_storage";

// Pages
//import DashboardPage from "./project/dashboard/pages/dashboard.page";
import LoginPage from "./project/auth/pages/login.page";

import {MRouter} from "./core/mrouter/MRouter";
import CoursesContainer from "./application/containers/courses.container";
import CourseDetailsContainer from "./application/containers/courseDetails.container";
import LessonDetailsContainer from "./application/containers/lessonDetails.container";
import UsersPageContainer from "./application/containers/users.container"
import PanelLayout from "./application/containers/panelLayout.container";

const loadStateDefault = loadState() ?? {
    userData: {}
};

const localState = {
    userData: loadStateDefault.userData,
};
const router = MRouter.initRouter({basePath: ''});
console.log("route is ",router.getRoute(routes.ROUTE_TO_LESSON_DETAILS_PAGE_NAME))

const store = createStore(reducers, localState, applyMiddleware(thunkMiddleware, authMiddleware));
export default function(){
    return <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path={router.getRoute(routes.ROUTE_TO_LOGIN_PAGE_NAME)} component={LoginPage}/>
                {/*<Route exact path={"/dashboard"} component={Dashboard}/>
                    <Route exact path={"/homepage"} component={Homepage}/>*/}
                <Route exact path={router.getRoute(routes.ROUTE_TO_COURSES_PAGE_NAME)} component={() => <PanelLayout Page={CoursesContainer} />}/>
                <Route exact path={router.getRoute(routes.ROUTE_TO_COURSE_DETAILS_PAGE_NAME)} component={() => <PanelLayout Page={CourseDetailsContainer} />}/>
                <Route exact path={router.getRoute(routes.ROUTE_TO_USERS_LIST_PAGE_NAME)} component={()=> <PanelLayout Page={UsersPageContainer}/>}/>

                <Route exact path={router.getRoute(routes.ROUTE_TO_LESSON_DETAILS_PAGE_NAME)} component={() => <PanelLayout Page={LessonDetailsContainer} />}/>



                {/*<Route exact path={"/courses2"} component={CoursesContainer}/>*/}
{/*
                <Route exact path={router.getRoute(routes.ROUTE_TO_DASHBOARD_PAGE_NAME)} component={() => <DashboardLayout Page={DashboardPage} title="Dashboards"/>}/>
*/}

                {/*<Route exact path={router.getRoute(routes.ROUTE_TO_COURSES_PAGE_NAME)} component={() => <DashboardLayout Page={CoursesPage} title="Courses List" Modals={CreateCourseModal}/>}/>*/}


            </Switch>
        </Router>
    </Provider>
}
