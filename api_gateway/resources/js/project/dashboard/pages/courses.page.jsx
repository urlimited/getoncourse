import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';

export const CoursesPage = ({props, modalIsOpen}) =>{
    //const [openModal, setOpenModal] = useState(modalIsOpen)
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        props.getCourses().then(response => {
            setCourses(response.message)
        })

    }, []);

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
                margin: '3px 0 3px 0',
                border: 'none !important'
            }
        },
        headRow: {
          style: {
              border: 'none !important'
          }
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px'
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
                width: '50px',
            },
        },
    };

    const columns = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Description',
            selector: 'description',
            sortable: true,
        },
        {
            name: 'Author Id',
            selector: 'author_id',
            sortable: true,
        },
        {
            name: 'Actions',
            selector: 'actions'
        },
    ];


    return(
        <div className="row ">
            <div className="col-lg-12 fc fc-media-screen">
                <div className="fc fc-media-screen fc-direction-ltr">
                    <div className="fc-header-toolbar fc-toolbar ">
                        <div className="fc-toolbar-chunk"><h2 className="fc-toolbar-title">Courses</h2></div>
                        <div className="fc-toolbar-chunk"/>
                        <div className="fc-toolbar-chunk">
                            <button
                                href="#"
                                className="fc-today-button btn btn-primary"
                                type="button"
                                onClick={e=>props.setPageModalIsActive(true)}>
                                <i className="mdi mdi-plus-circle-outline mr-1"/>
                                Create New</button>
                        </div>
                    </div>
                </div>
                <DataTable
                    columns={columns}
                    data={
                            courses.map(d=>({
                            id: d.id,
                            name: d.name,
                            description: d.description,
                            author_id: <a href="#">{d.author_id}</a>,
                            actions: <><a href="#" className="btn btn-outline-success waves-effect waves-light btn-sm mr-2"><i className="fa fa-fw fa-edit"/></a>
                                <a href="#" className="btn btn-outline-danger waves-effect waves-light btn-sm"><i className="fa fa-fw fa-trash"/></a></>
                            }))}
                    customStyles={customStyles}
                    pagination={true}
                    paginationPerPage = {5}
                    paginationRowsPerPageOptions =  {[5,10,20,30]}
                />
            </div>
        </div>
    )
}
