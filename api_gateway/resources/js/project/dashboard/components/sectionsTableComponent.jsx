import React, {useEffect, useState} from "react";
import DataTable from 'react-data-table-component';

import {ROUTE_TO_REPORTS_MANAGEMENT} from "../../routes";
import {Link, useParams} from "react-router-dom";
import {Section} from "../models/section.model";

export const ReportsTypeTableComponent = ({getSections, sections, setCurrentSection}) => {
    const {report_type_id} = useParams();

    useEffect(() => {
        getSections(report_type_id);
    }, [report_type_id]);

    return (
        <>
            <div className="card">
                <div className="card-header header-elements-inline">
                    <p className="card-title mt-heading">Sections list</p>
                </div>

                <div className="datatable-header">
                    {/*<div id="DataTables_Table_1_filter" className="dataTables_filter">
                    <label><span>Поиск:</span>
                        <input type="search" className="" placeholder="Начните печатать..."
                               value={search} onChange={e => setSearch(e.target.value)}/>
                    </label></div>*/}
                    <div className="dt-buttons">
                        <button className="dt-button btn bg-teal-400 btn btn-primary" type="button"
                                onClick={e => {
                                    setCurrentSection(new Section());
                                    $("#create_section_modal").modal('show')
                                }}>
                            <span>Create new section</span>
                        </button>
                    </div>

                </div>

                <DataTable
                    noHeader={true}
                    data={sections
                        .map(s => ({
                            id: s.id,
                            name: s.name,
                            nameProcessed: <Link
                                to={ROUTE_TO_REPORTS_MANAGEMENT + report_type_id + "/" + s.id}>{s.name}</Link>,
                            actions: <div className="text-right">
                                <button className="btn" onClick={e => {
                                    setCurrentSection(sections.find(sec => sec.id === s.id));
                                    $('#create_section_modal').modal('show');
                                }}>
                                    <i className="icon-info3 text-blue-400"/>
                                </button>
                                <button className="btn">
                                    <i className="icon-bin text-red-400"/>
                                </button>
                            </div>
                        }))
                    }
                    columns={[
                        {
                            name: "Section",
                            selector: "nameProcessed",
                            sortable: true,
                        },
                        {
                            name: "",
                            selector: "actions",
                            sortable: false,
                            width: "150px"
                            //sortFunction: (rowA, rowB) => rowA.name.localeCompare(rowB.name)
                        },
                    ]}
                    pagination={true}
                    paginationComponentOptions={{
                        rowsPerPageText: 'Записей на странице:',
                        rangeSeparatorText: 'of',
                        noRowsPerPage: true,
                        selectAllRowsItem: false,
                        selectAllRowsItemText: 'All'
                    }}
                />
            </div>
        </>
    )
}