import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {ROUTE_TO_REPORTS, ROUTE_TO_SINGLE_REPORT} from "../../routes";
import {Report} from "../models/report.model";
import DataTable from "react-data-table-component";
import history from "../../../core/services/history";

export const SingleReportClientPage = ({setPageBreadcrumbs, getReportDetails, sections, getSections, closeReport}) => {
    const [report, setReport] = useState(new Report());

    const {urlReportId} = useParams();

    useEffect(() => {
        getReportDetails(urlReportId)
            .then(r => {
                setReport(new Report(r.message));
                //TODO: posle togo kak Dias budet vyvodit' syuda id, ubrat' etot kusok
                const data = {...r.message, id: urlReportId}
                setPageBreadcrumbs(new Report(data));
            });
        getSections(urlReportId);
    }, []);

    return (
        <>
            <div className="card">
                <img src="/images/image_1.png" alt=""/>
            </div>
            <div className="card" id="report-sections-list">
                <div className="card-header header-elements-inline">
                    <p className="card-title mt-heading">{report.type}</p>
                </div>
                <div className="card-body">
                    <DataTable
                        noHeader={true}
                        data={sections
                            .map(section => ({
                                id: section.id,
                                name: section.name,
                                nameProcessed: <Link to={ROUTE_TO_SINGLE_REPORT + urlReportId + `/${section.id}`}>
                                    <p>{section.name}</p></Link>,
                                sectionFillingProgress: section.answeredCriteria / section.countCriteria,
                                sectionFillingProgressProcessed: <>
                                    <div className="progress">
                                        <div className="progress-bar tertiary-green-light"
                                             style={{width: `${(section.answeredCriteria / section.countCriteria) * 100}%`}}>
                                        </div>
                                    </div>
                                    <div>
                                        <p><span
                                            className="font-size-sm">заполнено на {Math.round(section.answeredCriteria / section.countCriteria * 100)}%</span>
                                        </p>
                                    </div>
                                </>,
                                scoreProcessed: <>
                                    <div className="progress">
                                        <div className="progress-bar secondary-violet-light"
                                             style={{width: `${(section.score) * 100}%`}}>
                                        </div>
                                    </div>
                                    <div>
                                        <p><span
                                            className="font-size-sm">соответствует на {Math.round(section.score * 100)}%</span>
                                        </p>
                                    </div>
                                </>,
                            }))
                        }
                        columns={[
                            {
                                name: "",
                                selector: "nameProcessed",
                                sortable: true,
                            },
                            {
                                name: "",
                                selector: "sectionFillingProgressProcessed",
                                sortable: true,
                                width: "200px",
                            },
                            {
                                name: "",
                                selector: "scoreProcessed",
                                sortable: true,
                                width: "200px",
                                //sortFunction: (rowA, rowB) => rowA.volume - rowB.volume
                            },
                        ]}
                        pagination={false}
                        paginationComponentOptions={{
                            rowsPerPageText: 'Записей на странице:',
                            rangeSeparatorText: 'of',
                            noRowsPerPage: true,
                            selectAllRowsItem: false,
                            selectAllRowsItemText: 'All'
                        }}
                    />
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-3 offset-9">
                            <button className="btn form-control primary-normal"
                                    disabled={report.fulfillment !== 1}
                                    onClick={e => closeReport(urlReportId)
                                        .then(r => history.push(ROUTE_TO_REPORTS))}>Сформировать отчет
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}