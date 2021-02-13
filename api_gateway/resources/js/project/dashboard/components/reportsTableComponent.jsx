import React, {useEffect, useState} from "react";
import DataTable from 'react-data-table-component';
import pdf from "../pages/report.pdf";

import {ROUTE_TO_REPORT_RECOMMENDATIONS, ROUTE_TO_SINGLE_REPORT} from "../../routes";
import {Link, useParams} from "react-router-dom";


export const ReportsTableComponent = ({setCurrentReport, setPageBreadcrumbs, reports, getReports, closeReport}) => {
    const {urlReportTypeId} = useParams();

    useEffect(() => {
        getReports();
        setPageBreadcrumbs();
    }, []);

    return (
        <>
            <div className="card" id="reports-list">
                <div className="card-header header-elements-inline">
                    <p className="card-title mt-heading">Список отчетов</p>
                </div>

                <div className="datatable-header">
                    <div className="dt-buttons">
                        <button className="btn primary-normal font-size-sm" style={{fontSize: "14px"}} type="button"
                                onClick={e => {
                                    $("#create_report_modal").modal('show')
                                }}>Новый отчет
                        </button>
                    </div>

                </div>

                <DataTable
                    noHeader={true}
                    noDataComponent={<p className={"mt-4 mb-4"}>У вас пока нет отчетов по данной методологии</p>}
                    data={(urlReportTypeId ? reports.filter(r => r.typeId === parseInt(urlReportTypeId)) : reports)
                        .map(report => {
                            console.log(report)
                            return ({
                                id: report.id,
                                type: report.getType(),
                                typeProcessed: <Link to={ROUTE_TO_SINGLE_REPORT + report.id}>
                            <span className="d-inline-block" style={{width: "30px", verticalAlign: "top"}}>
                                <i className="icon-copy" style={{color: report.iconColor, fontSize: "28px"}}/>
                            </span>
                                    <span className="d-inline-block" style={{verticalAlign: "top"}}>
                                <p className="font-size-sm">{report.getType()}</p>
                                <p className="font-size-xs">{report.createdAt}</p>
                            </span>
                                </Link>,
                                reportFillingProgress: `${report.answeredCriteria}/${report.totalCriteria}`,
                                reportFillingProgressProcessed: <>
                                    <div className="progress">
                                        <div className="progress-bar tertiary-green-light"
                                             style={{width: `${(report.answeredCriteria / report.totalCriteria) * 100}%`}}/>
                                    </div>
                                    <div>
                                        <p><span
                                            className="font-size-sm">заполнено на {Math.round(report.answeredCriteria / report.totalCriteria * 100)}%</span>
                                        </p>
                                    </div>
                                </>,
                                reportScoreProcessed: <>
                                    <div className="progress">
                                        <div className="progress-bar secondary-violet-dark"
                                             style={{width: `${report.score * 100}%`}}/>
                                    </div>
                                    <div>
                                        <p><span
                                            className="font-size-sm">соответствует на {Math.round(report.score * 100)}%</span>
                                        </p>
                                    </div>
                                </>,
                                status: report.status,
                                statusProcessed: {
                                    "reported": <span className="pl-2 pr-2 pt-2 pb-1 badge badge-success">завершен</span>,
                                    "in process": <span
                                        className="pl-2 pr-2 pt-2 pb-1  badge badge-warning">в процессе</span>,
                                }[report.status],
                                actions: <div className="text-right">
                                    {report.status === "reported"
                                        ? <>
                                            <Link to={ROUTE_TO_REPORT_RECOMMENDATIONS + report.id} className="btn">
                                                <i className="icon-copy text-blue-400"/>
                                            </Link>
                                            <button className="btn"
                                                    onClick={e => pdf(report)}>
                                                <i className="icon-file-pdf text-success-400"/>
                                            </button>
                                        </>
                                        : report.answeredCriteria === report.totalCriteria
                                            ? <>
                                                <button className="btn"
                                                        onClick={e => {
                                                            setCurrentReport(report);
                                                            $("#confirm_report_modal").modal('show');
                                                        }}>
                                                    <i className="icon-file-check text-success-400"/>
                                                </button>
                                            </>
                                            : <></>
                                    }
                                </div>
                            })
                        })
                    }
                    columns={[
                        {
                            name: "Отчет",
                            selector: "typeProcessed",
                            sortable: true,
                            //sortFunction: (rowA, rowB) => rowA.name.localeCompare(rowB.name)
                        },
                        {
                            name: "",
                            selector: "reportFillingProgressProcessed",
                            sortable: true,
                            width: "200px"
                            //sortFunction: (rowA, rowB) => rowA.volume - rowB.volume
                        },
                        {
                            name: "",
                            selector: "reportScoreProcessed",
                            sortable: true,
                            width: "200px",
                            //sortFunction: (rowA, rowB) => rowA.volume - rowB.volume
                        },
                        {
                            name: "Статус",
                            selector: "statusProcessed",
                            width: "100px",
                            sortable: true
                        },
                        {
                            name: "",
                            right: true,
                            selector: "actions",
                            width: "150px",
                            sortable: false,
                        },
                    ]}
                    pagination={true}
                    paginationComponentOptions={{
                        rowsPerPageText: 'Записей на странице:',
                        rangeSeparatorText: 'из',
                        noRowsPerPage: true,
                        selectAllRowsItem: false,
                        selectAllRowsItemText: 'все'
                    }}
                />
            </div>
        </>
    )
}