import {connect} from "react-redux";
import {SingleReportFormComponent} from "../../components/singleReportComponent";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";

const mapStateToProps = (state, ownProps) => ({
    /*products: state.data.products*/
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    // setCurrentProduct: (product) => dispatch(setPageSettings({currentProduct: product}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleReportFormComponent);