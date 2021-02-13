import {connect} from "react-redux";
import ArrangementsClientPage from "../../pages/arrangementsClient.page";
import {apiGetArrangementsAll} from "../../requests/getArrangementsAll.request";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";
import {Arrangement} from "../../models/arrangement.model";
import {apiGetReportDetails} from "../../requests/getReportDetails.request";
import setCriteria from "../../actions/setCriteria";
import {apiDeleteArrangement} from "../../requests/arrangementDelete.request";

const mapStateToProps = (state, ownProps) => ({
    currentArrangement: state.pageData.pageSettings.currentArrangement ?? new Arrangement(),
    criteria: state.data.criteria
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getArrangements: () => dispatch(apiGetArrangementsAll()),
    setCurrentArrangement: (arrangement) => dispatch(setPageSettings({currentArrangement: arrangement})),
    getReportDetails: (reportId) => dispatch(apiGetReportDetails(reportId)),
    setCriteria: (data) => dispatch(setCriteria(data)),
    deleteArrangement: (arrangementId) => dispatch(apiDeleteArrangement({id: arrangementId}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArrangementsClientPage);