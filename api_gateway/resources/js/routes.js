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
import DashboardLayout from "./project/dashboard/containers/layouts/dashboard.container";
import CoursesLayout from './project/dashboard/containers/pages/courses.container'
import LoginPage from "./project/auth/pages/login.page";
//import SingleReportClientRecommendation from "./project/dashboard/containers/pages/singleReportClientRecommendation.container";

// Modals
import {DashboardModal} from "./project/dashboard/modals/dashboard.modal";
import DashboardPage from "./project/dashboard/pages/dashboard.page";
import {createCourseModal} from "./project/dashboard/modals/createCourse.modal";
import {CoursesPage} from "./project/dashboard/pages/courses.page";

const loadStateDefault = loadState() ?? {
    userData: {}
};

const localState = {
    userData: loadStateDefault.userData,
};

const store = createStore(reducers, localState, applyMiddleware(thunkMiddleware, authMiddleware));
export default function(){
    return <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path={routes.ROUTE_TO_LOGIN_PAGE} component={LoginPage}/>
                <Route exact path={routes.ROUTE_TO_DASHBOARD} component={() => <DashboardLayout Page={DashboardPage} title="Dashboards"/>}/>
                <Route exact path={routes.ROUTE_TO_COURSES} component={() => <CoursesLayout Page={CoursesPage} title="Courses List" Modals={createCourseModal}/>}/>
                {/*<Route exact path={routes.ROUTE_TO_SINGLE_REPORT + ":urlReportId"} component={() => <DashboardLayout Page={SingleReportClient} Modals={DashboardModal} />}/>
                <Route exact path={routes.ROUTE_TO_SINGLE_REPORT + ":urlReportId/:urlSectionId"} component={() => <DashboardLayout Page={SingleReportClientSection} Modals={DashboardModal} />}/>
                <Route exact path={routes.ROUTE_TO_REPORTS} component={() => <DashboardLayout Page={ReportsListClient} Modals={ReportsClientModal} />}/>
                <Route exact path={routes.ROUTE_TO_REPORTS + ":urlReportTypeId"} component={() => <DashboardLayout Page={ReportsListClient} Modals={ReportsClientModal} />}/>
                <Route exact path={routes.ROUTE_TO_ARRANGEMENTS + ":urlReportId"} component={() => <DashboardLayout Page={ArrangementsClient} Modals={ArrangementsModal} />}/>
                <Route exact path={routes.ROUTE_TO_DASHBOARD} component={() => <DashboardLayout Page={ReportsListClient} Modals={SectionsModal} />}/>
                <Route exact path={routes.ROUTE_TO_REPORTS_MANAGEMENT + ":report_type_id/:section_id"} component={() => <DashboardLayout Page={CriteriaManagement} Modals={CriteriaModal}/>}/>
                <Route exact path="" component={() => <DashboardLayout Page={ReportsListClient} Modals={SectionsModal} />}/>*/}
                {/*<Route exact path={routes.ROUTE_TO_DASHBOARD} render={() => <DashboardLayout Page={ReportsClientPage} Modals={ProductsModals} />} />*/}
            </Switch>
        </Router>
    </Provider>
}
