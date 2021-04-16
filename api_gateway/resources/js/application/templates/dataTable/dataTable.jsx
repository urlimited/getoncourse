import React from 'react'
import ReactDataTable from 'react-data-table-component';
import Button from "../button/button";

const DataTable = ({columns, data, pagination, createButton}) => {
    return (
        <>
            {createButton ? <div>
                <Button {...createButton} />
            </div> : <></>}

            <ReactDataTable
                columns={columns}
                data={data}
                pagination={!!pagination}
                paginationPerPage={10}
            />
        </>
    )
}

export default DataTable
