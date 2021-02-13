import {connect} from "react-redux";
import {ArrangementsModals} from "../../modals/arrangements.modal";
import {apiGetArrangementsByReportId} from "../../requests/getArrangementsByReportId.request";
import {apiCreateArrangement} from "../../requests/arrangementCreate.request";
import {apiUpdateArrangement} from "../../requests/arrangementUpdate.request";
import {Arrangement} from "../../models/arrangement.model";

const mapStateToProps = (state, ownProps) => ({
    currentArrangement: state.pageData.pageSettings.currentArrangement ?? new Arrangement(),
    criteria: state.data.criteria
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getArrangements: (reportId) => dispatch(apiGetArrangementsByReportId(reportId)),
    updateArrangement: (data) => dispatch(apiUpdateArrangement(data)),
    createArrangement: (data) => dispatch(apiCreateArrangement(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArrangementsModals);
