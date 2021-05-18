import React from 'react'
import ReactDataTable from 'react-data-table-component';
import Button from "../button/button";
import Loader from "../loader/loader";
const DataTable = ({columns, data, pagination, createButton, customStyles, pageLoader}) => {
    return (
        <>
            {createButton ? <div>
                <Button {...createButton} />
            </div> : <></>}
            {pageLoader?<Loader/>:
                <ReactDataTable
                    columns={columns}
                    data={data}
                    pagination={!!pagination}
                    paginationPerPage={10}
                    customStyles = {customStyles}
                />}
        </>
    )
}

export default DataTable
