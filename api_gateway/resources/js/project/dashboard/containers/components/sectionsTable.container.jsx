import {connect} from "react-redux";
import {ReportsTypeTableComponent} from "../../components/sectionsTableComponent";
import {apiGetSections} from "../../requests/getSections.request";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";

const mapStateToProps = (state, ownProps) => ({
    sections: state.data.sections
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setCurrentSection: (section) => dispatch(setPageSettings({currentSection: section})),
    getSections: (reportTypeId) => dispatch(apiGetSections(reportTypeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportsTypeTableComponent);