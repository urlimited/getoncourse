import React from 'react'

const Modal = ({title, id, body, size, buttons}) => {
    return (
        <div className="modal" tabIndex="-1" id={id}>
            <div className={"modal-dialog " + (size ? "modal-" + size : "")}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {body}
                    </div>
                    <div className="modal-footer">
                        {buttons}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
