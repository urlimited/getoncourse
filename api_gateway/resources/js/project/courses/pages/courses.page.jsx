import React, {useEffect} from 'react'
import DataTable from 'react-data-table-component';
import {Link} from "react-router-dom";
import {ROUTE_TO_COURSE_DETAILS_PAGE_NAME} from "../../../application/routes";
import {MRouter} from "../../../core/mrouter/MRouter";

export const CoursesPage = ({courses, setSelectedCourse, getCourses, deleteCourse, setCourses, user}) => {

    useEffect(() => {
        getCourses();
    }, []);
    //TODO: refactor with BS 5
    const a = () => {
        const b = document.getElementById('createCourse');

        document.getElementById("backdrop").style.display = "block";
        b.style.display = "block";
        b.addClass('show');
    }

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
            selector: row => row.id,
            sortable: true,
            width: '50px'
        },
        {
            name: 'Название курса',
            selector: row => row.nameProcessed,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Краткое описание',
            selector: row => row.descriptionProcessed,
            sortable: true,
        },
        {
            name: 'Автор курса',
            selector: row => row.authorProcessed,
            sortable: true,
            sortFunction: (rowA, rowB) => (rowA.authorId - rowB.authorId),
            width: '200px'
        },
        {
            name: 'Actions',
            selector: row => row.actions,
            width: '100px'
        },
    ];


    return (
        <div className="row ">
            <div className="col-lg-12 fc fc-media-screen">
                <div className="fc fc-media-screen fc-direction-ltr">
                    <div className="fc-header-toolbar fc-toolbar ">
                        <div className="fc-toolbar-chunk">
                            <h2 className="fc-toolbar-title">Courses</h2>
                        </div>
                        <div className="fc-toolbar-chunk"/>
                        <div className="fc-toolbar-chunk">
                            <button className="fc-today-button btn btn-primary" onClick={
                                e=>{
                                    setSelectedCourse(null)
                                    a()
                                }
                            } >
                                <i className="mdi mdi-plus-circle-outline mr-1"/>Create New
                            </button>
                        </div>
                    </div>
                </div>
                <DataTable
                    columns={columns}
                    data={
                        courses.map((c) => ({
                            id: c.id,
                            name: c.name,
                            nameProcessed: <Link to={MRouter.initRouter().getRoute(ROUTE_TO_COURSE_DETAILS_PAGE_NAME, {courseId: c.id})}>{c.name}</Link>,
                            description: c.description,
                            descriptionProcessed: <Link to={MRouter.initRouter().getRoute(ROUTE_TO_COURSE_DETAILS_PAGE_NAME, {courseId: c.id})}>{c.description}</Link>,
                            authorId: c.authorId,
                            authorProcessed: <div className="row">
                                <div className="col-md-3">
                                    <i className="fa-user" />
                                </div>
                                <div className="col-md-9">
                                    <p>{c.authorId}</p>
                                </div>
                            </div>,
                            actions: <>
                                <button className="btn btn-outline-success waves-effect waves-light btn-sm mr-2"
                                    onClick={
                                        () => {
                                            setSelectedCourse(c);
                                            a();
                                        }

                                    }>
                                    <i className="fa fa-fw fa-edit"/>
                                </button>
                                <button className="btn btn-outline-danger waves-effect waves-light btn-sm"
                                    onClick={()=>{
                                        deleteCourse(c.id).
                                        then(r=>setCourses(courses.filter(
                                            c_in=>c_in.id !== c.id
                                        )))
                                    }
                                    }>
                                    <i className="fa fa-fw fa-trash"/>
                                </button>
                            </>
                        }))}
                    customStyles={customStyles}
                    pagination={true}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 20, 30]}
                />
            </div>
        </div>
    )
}
