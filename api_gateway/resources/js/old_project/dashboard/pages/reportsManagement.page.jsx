import React, {useEffect, useState} from "react";
import ReportsSectionsTableComponent from "../containers/components/sectionsTable.container";
import {useParams} from "react-router-dom";
import {ReportType} from "../models/reportType.model";
import {ROUTE_TO_REPORTS_MANAGEMENT} from "../../routes";

const ReportsManagement = ({reportTypes, setPageBreadcrumbs}) => {
    const {report_type_id} = useParams();

    const [currentReportType, setCurrentReportType] = useState(new ReportType());

    useEffect(() => {
        setCurrentReportType(reportTypes.find(r => r.id === parseInt(report_type_id)) ?? new ReportType());
    }, [report_type_id]);

    useEffect(() => {
        setPageBreadcrumbs([
            {name: currentReportType.name, link: ROUTE_TO_REPORTS_MANAGEMENT + currentReportType.id}
        ])
    }, [currentReportType]);


    return (
        <>
            <ReportsSectionsTableComponent />
        </>
    )
};

export default ReportsManagement;