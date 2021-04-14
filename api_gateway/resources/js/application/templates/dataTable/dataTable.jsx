import React from 'react'
import ReactDataTable from 'react-data-table-component';

const DataTable = ({columns, data, pagination}) => {
    return (
        <ReactDataTable
            columns={columns}
            data={data}
            pagination={!!pagination}
            paginationPerPage={10}
        />
    )
}

export default DataTable
