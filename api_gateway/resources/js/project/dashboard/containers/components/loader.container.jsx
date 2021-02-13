import {connect} from "react-redux";
import {Loader} from "../../components/loaderComponent";

const mapStateToProps = (state, ownProps) => ({
    isLoading: state.pageData.isFetching
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);