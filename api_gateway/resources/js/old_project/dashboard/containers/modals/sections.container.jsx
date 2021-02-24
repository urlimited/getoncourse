import {connect} from "react-redux";
import {SectionsModals} from "../../modals/sections.modal"
import {apiCreateSection} from "../../requests/sectionCreate.request";
import {apiGetSections} from "../../requests/getSections.request";
import {apiUpdateSection} from "../../requests/sectionUpdate.request";
import {Section} from "../../models/section.model";

const mapStateToProps = (state, ownProps) => ({
    currentSection: state.pageData.pageSettings.currentSection ?? new Section()
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createSection: (data) => dispatch(apiCreateSection(data)),
    updateSection : (data) => dispatch(apiUpdateSection(data)),
    getSections: (reportTypeId) => dispatch(apiGetSections(reportTypeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionsModals);
