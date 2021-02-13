import {connect} from "react-redux";
import ReportPdf from "../../pages/report.pdf";
import {Report} from "../../models/report.model";

const mapStateToProps = (state, ownProps) => ({
    currentReport: state.pageData.pageSettings.currentReport ?? new Report(),
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReportPdf);