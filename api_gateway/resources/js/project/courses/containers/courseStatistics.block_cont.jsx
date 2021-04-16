import {connect} from "react-redux";
import {CourseStatisticsBlock} from "../blocks/courseStatistics.block";

const mapStateToProps = (state, ownProps) => ({
    pageSettings: state.pageData.pageSettings
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CourseStatisticsBlock);
