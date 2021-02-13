import React, {useEffect, useState} from "react";
import DataTable from 'react-data-table-component';

import {Link, useParams} from "react-router-dom";
import {Criteria} from "../models/criteria.model";

export const CriteriaTableComponent = ({getCriteria, criteria, setCurrentCriteria}) => {
    const {report_type_id, section_id} = useParams();

    useEffect(() => {
        getCriteria(section_id);
        //setPageBreadcrumbs()
    }, [section_id]);

    return (
        <>
            <div className="card">
                <div className="card-header header-elements-inline">
                    <p className="card-title mt-heading">Criteria list</p>
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
                                    setCurrentCriteria(new Criteria());
                                    $("#create_criteria_modal").modal('show')
                                }}>
                            <span>Create new criteria</span>
                        </button>
                    </div>

                </div>

                <DataTable
                    noHeader={true}
                    data={criteria
                        .map(c => ({
                            id: c.id,
                            content: c.content,
                            actions: <div className="text-right">
                                <button className="btn" onClick={e => {
                                    setCurrentCriteria(criteria.find(cr => cr.id === c.id));
                                    $('#create_criteria_modal').modal('show');
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
                            name: "Criteria",
                            selector: "content",
                            sortable: true,
                        },
                        {
                            name: "",
                            right: true,
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