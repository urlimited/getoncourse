import React, {useEffect, useState} from "react";
import CriteriaTable from "../containers/components/criteriaTable.container";
import {useParams} from "react-router-dom";
import {ReportType} from "../models/reportType.model";
import {ROUTE_TO_REPORTS_MANAGEMENT} from "../../routes";
import {Section} from "../models/section.model";

const CriteriaManagement = ({sections, reportTypes, setPageBreadcrumbs}) => {
    const {report_type_id, section_id} = useParams();

    const [currentSection, setCurrentSection] = useState(new Section());
    const [currentReportType, setCurrentReportType] = useState(new ReportType());

    useEffect(() => {
        setCurrentSection(sections.find(s => s.id === parseInt(section_id)) ?? new Section());
        setCurrentReportType(reportTypes.find(r => r.id === parseInt(report_type_id)) ?? new ReportType());
    }, [report_type_id]);

    useEffect(() => {
        setPageBreadcrumbs([
            {name: currentReportType.name, link: ROUTE_TO_REPORTS_MANAGEMENT + report_type_id},
            {name: currentSection.name, link: ROUTE_TO_REPORTS_MANAGEMENT + report_type_id + "/" + currentSection.id}
        ])
    }, [currentSection]);


    return (
        <>
            <CriteriaTable />
        </>
    )
};

export default CriteriaManagement;