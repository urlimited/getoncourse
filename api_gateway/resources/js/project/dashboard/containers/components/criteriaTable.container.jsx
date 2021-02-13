import {connect} from "react-redux";
import {CriteriaTableComponent} from "../../components/criteriaTableComponent";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";
import {apiGetCriteriaBySection} from "../../requests/getCriteriaBySection.request";
import {ROUTE_TO_LOGIN_PAGE, ROUTE_TO_REPORTS_MANAGEMENT} from "../../../routes";

const mapStateToProps = (state, ownProps) => ({
    criteria: state.data.criteria
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setCurrentCriteria: (crit) => dispatch(setPageSettings({currentCriteria: crit})),
    /*setPageBreadcrumbs: (reportTypeId, sectionId) => dispatch(setPageSettings({
        breadcrumbs: [
            {name: section.name, link: `${ROUTE_TO_REPORTS_MANAGEMENT}${reportType.id}/${section.id}`},
            {name: reportType.name, link: `${ROUTE_TO_REPORTS_MANAGEMENT}${reportType.id}`},
        ]
    })),*/
    getCriteria: (sectionId) => dispatch(apiGetCriteriaBySection(sectionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CriteriaTableComponent);