import {connect} from "react-redux";
import {CriteriaModals} from "../../modals/criteria.modal"
import {Criteria} from "../../models/criteria.model";
import {apiGetCriteriaBySection} from "../../requests/getCriteriaBySection.request";
import {apiCreateCriteria} from "../../requests/criteriaCreate.request";
import {apiUpdateCriteria} from "../../requests/criteriaUpdate.request";

const mapStateToProps = (state, ownProps) => ({
    currentCriteria: state.pageData.pageSettings.currentCriteria ?? new Criteria()
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createCriteria: (data) => dispatch(apiCreateCriteria(data)),
    updateCriteria : (data) => dispatch(apiUpdateCriteria(data)),
    getCriteria: (sectionId) => dispatch(apiGetCriteriaBySection(sectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CriteriaModals);
