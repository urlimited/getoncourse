import React, {useState} from 'react'


export const createCourseModal = ({isOpen, setOpen}) => {

    console.log('state', isOpen)
    return (
        <>
            <div className="modal fade show" role="dialog" tabIndex="-1" style={{display: isOpen ? "block" : "none"}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header"><h4 className="modal-title">Add a category</h4>
                            <button type="button" className="close" aria-label="Close"
                                    onClick={e => setOpen(false)}><span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form noValidate="" action="#" method="get" className="av-invalid">
                                <div className="form-row">
                                    <div className="col-12 col">
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label htmlFor="title_category" className="">Category Name</label>
                                                <input name="title_category" required="" id="title_category"
                                                       type="text"
                                                       className="is-untouched is-pristine av-invalid form-control"
                                                       value=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col">
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label htmlFor="event_category" className="">Choose Category
                                                    Color</label>
                                                <select name="event_category" id="event_category"
                                                        className="is-untouched is-pristine av-valid form-control">
                                                    <option value="bg-danger">Danger</option>
                                                    <option value="bg-success">Success</option>
                                                    <option value="bg-primary">Primary</option>
                                                    <option value="bg-info">Info</option>
                                                    <option value="bg-dark">Dark</option>
                                                    <option value="bg-warning">Warning</option>
                                                </select></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="text-end">
                                            <button type="button" className="btn btn-light me-2"
                                                    onClick={e => setOpen(false)}>Close
                                            </button>
                                            <button type="submit" className="btn btn-success save-event">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen?<div className="modal-backdrop fade show" />:null}

        </>
    )
}
