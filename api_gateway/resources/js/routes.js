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
import LoginPage from "./project/auth/pages/login.page";
import DashboardContainer from "./project/dashboard/containers/layouts/dashboard.container";
import {MRouter} from "./core/mrouter/MRouter";
import CoursesContainer from "./application/containers/courses.container";
import CourseDetailsContainer from "./application/containers/courseDetails.container";
import LessonDetailsContainer from "./application/containers/lessonDetails.container";
import UsersPageContainer from "./application/containers/users.container"
import PanelLayout from "./application/containers/panelLayout.container";
import SingleUserPage from "./application/containers/singleUser.container";

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
                <Route exact path={router.getRoute(routes.ROUTE_TO_DASHBOARD_PAGE_NAME)} component={()=><PanelLayout Page={DashboardContainer}/>}/>
                <Route exact path={router.getRoute(routes.ROUTE_TO_COURSES_PAGE_NAME)} component={() => <PanelLayout Page={CoursesContainer} />}/>
                <Route exact path={router.getRoute(routes.ROUTE_TO_COURSE_DETAILS_PAGE_NAME)} component={() => <PanelLayout Page={CourseDetailsContainer} />}/>
                <Route exact path={router.getRoute(routes.ROUTE_TO_USERS_LIST_PAGE_NAME)} component={()=> <PanelLayout Page={UsersPageContainer}/>}/>

                <Route exact path={router.getRoute(routes.ROUTE_TO_LESSON_DETAILS_PAGE_NAME)} component={() => <PanelLayout Page={LessonDetailsContainer} />}/>
                <Route exact path={router.getRoute(routes.ROUTE_TO_PROFILE_PAGE_NAME)} component={() => <PanelLayout Page={SingleUserPage} />}/>
            </Switch>
        </Router>
    </Provider>
}
