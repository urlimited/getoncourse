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
import LoginPage from "./project/auth/pages/login.page";
import ReportsListClient from "./project/dashboard/containers/pages/reportsClient.container";
import SingleReportClientSection from "./project/dashboard/containers/pages/singleReportClientSection.container";
import SingleReportClient from "./project/dashboard/containers/pages/singleReportClient.container";
import ArrangementsClient from "./project/dashboard/containers/pages/arrangementsClient.container";
import ReportsManagement from "./project/dashboard/containers/pages/reportsManagement.container";
import CriteriaManagement from "./project/dashboard/containers/pages/criteriaManagement.container";
//import SingleReportClientRecommendation from "./project/dashboard/containers/pages/singleReportClientRecommendation.container";

// Modals
import ArrangementsModal from "./project/dashboard/containers/modals/arrangements.container";
import SectionsModal from "./project/dashboard/containers/modals/sections.container";
import CriteriaModal from "./project/dashboard/containers/modals/criteria.container";
import ReportsClientModal from "./project/dashboard/containers/modals/reportsClient.container";
import {DashboardModal} from "./project/dashboard/modals/dashboard.modal";

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
                <Route exact={routes.ROUTE_TO_LOGIN_PAGE} component={LoginPage}/>
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
