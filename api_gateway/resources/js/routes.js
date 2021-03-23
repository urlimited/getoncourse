import React from 'react';
import {Provider} from "react-redux";
import {Router, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from "./project/reducers";
import {authMiddleware} from "./core/auth/middlewares";
import * as routes from "./project/routes";
import history from "./core/services/history";
import {loadState} from "./core/services/local_storage";

// Pages
import DashboardPage from "./project/dashboard/pages/dashboard.page";
import DashboardLayout from "./project/dashboard/containers/layouts/dashboard.container";
import LoginPage from "./project/auth/pages/login.page";
import CoursesPage from "./project/courses/containers/courses.page_cont";
import CourseDetailsPage from "./project/courses/containers/courseDetails.page_cont";
import LessonDetailsPage from "./project/courses/containers/lessonDetails.page_cont";
import {Homepage} from "./src/application/consumers/homepage";
// Modals
import {DashboardModal} from "./project/dashboard/modals/dashboard.modal";
import CreateCourseModal from "./project/courses/containers/createCourses.modal_cont";
import {MRouter} from "./core/mrouter/MRouter";

const loadStateDefault = loadState() ?? {
    userData: {}
};

const localState = {
    userData: loadStateDefault.userData,
};

const router = MRouter.initRouter({basePath: ''});

const store = createStore(reducers, localState, applyMiddleware(thunkMiddleware, authMiddleware));
export default function(){
    return <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path={router.getRoute(routes.ROUTE_TO_LOGIN_PAGE_NAME)} component={LoginPage}/>
                <Route exact path={router.getRoute(routes.ROUTE_TO_DASHBOARD_PAGE_NAME)} component={() => <DashboardLayout Page={DashboardPage} title="Dashboards"/>}/>
                <Route exact path={router.getRoute(routes.ROUTE_TO_COURSES_PAGE_NAME)} component={() => <DashboardLayout Page={CoursesPage} title="Courses List" Modals={CreateCourseModal}/>}/>
                <Route exact path={router.getRoute(routes.ROUTE_TO_COURSE_DETAILS_PAGE_NAME)} component={() => <DashboardLayout Page={CourseDetailsPage} title="Детали курса" Modals={DashboardModal}/>}/>
                {/*<Route exact path={router.getRoute(routes.ROUTE_TO_LESSONS_PAGE_NAME)} component={() => <DashboardLayout Page={CoursesPage} title="Courses List" Modals={CreateCourseModal}/>}/>*/}
                <Route exact path={router.getRoute(routes.ROUTE_TO_LESSON_DETAILS_PAGE_NAME)} component={() => <DashboardLayout Page={LessonDetailsPage} title="Управление уроком" Modals={CreateCourseModal}/>}/>
                {/*<Route exact path={routes.ROUTE_TO_SINGLE_REPORT + ":urlReportId"} component={() => <DashboardLayout Page={SingleReportClient} Modals={DashboardModal} />}/>
                <Route exact path={routes.ROUTE_TO_SINGLE_REPORT + ":urlReportId/:urlSectionId"} component={() => <DashboardLayout Page={SingleReportClientSection} Modals={DashboardModal} />}/>
                <Route exact path={routes.ROUTE_TO_REPORTS} component={() => <DashboardLayout Page={ReportsListClient} Modals={ReportsClientModal} />}/>
                <Route exact path={routes.ROUTE_TO_REPORTS + ":urlReportTypeId"} component={() => <DashboardLayout Page={ReportsListClient} Modals={ReportsClientModal} />}/>
                <Route exact path={routes.ROUTE_TO_ARRANGEMENTS + ":urlReportId"} component={() => <DashboardLayout Page={ArrangementsClient} Modals={ArrangementsModal} />}/>
                <Route exact path={routes.ROUTE_TO_DASHBOARD_PAGE} component={() => <DashboardLayout Page={ReportsListClient} Modals={SectionsModal} />}/>
                <Route exact path={routes.ROUTE_TO_REPORTS_MANAGEMENT + ":report_type_id/:section_id"} component={() => <DashboardLayout Page={CriteriaManagement} Modals={CriteriaModal}/>}/>
                <Route exact path="" component={() => <DashboardLayout Page={ReportsListClient} Modals={SectionsModal} />}/>*/}
                {/*<Route exact path={routes.ROUTE_TO_DASHBOARD_PAGE} render={() => <DashboardLayout Page={ReportsClientPage} Modals={ProductsModals} />} />*/}
            </Switch>
        </Router>
    </Provider>
}
