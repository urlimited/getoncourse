import {connect} from "react-redux";
import {SingleReportClientRecommendation} from "../../pages/singleReportClientRecommendation.page";
import {apiGetReportDetails} from "../../requests/getReportDetails.request";
import setPageSettings from "../../../../core/pageSettings/actions/setPageSettings";
import {ROUTE_TO_REPORT_RECOMMENDATIONS, ROUTE_TO_SINGLE_REPORT} from "../../../routes";
import {apiGetSectionsByReportId} from "../../requests/getSectionsByReportId.request";
import Chart from "chart.js";

const mapStateToProps = (state, ownProps) => ({
    criteria: state.data.criteria,
    sections: state.data.sections
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getReportDetails: (reportId) => dispatch(apiGetReportDetails(reportId)),
    setPageBreadcrumbs: (report) => dispatch(setPageSettings({
        breadcrumbs: [
            {name: report.type, link: ROUTE_TO_SINGLE_REPORT + report.id},
            {name: "Результаты", link: ROUTE_TO_REPORT_RECOMMENDATIONS + report.id},
        ]
    })),
    getSectionsByReport: (reportId) => dispatch(apiGetSectionsByReportId(reportId)),
    init: (canvas) => {
        var myDoughnutChart = new Chart(canvas.donut.ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    backgroundColor: ['#005EB8', '#D7D7D7'],
                    borderColor: 'transparent',
                    data: [canvas.donut.totalScore, (100 - canvas.donut.totalScore)]
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
            },
            options: {
                cutoutPercentage: 80,
                rotation: 0 /* * Math.PI*/,
                aspectRatio: 1
            }
        });

    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleReportClientRecommendation);
