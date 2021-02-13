import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const SectionsModals = ({updateSection, getSections, createSection, currentSection}) => {
    const [sectionTitle, setSectionTitle] = useState(currentSection.name);
    const [illegalFields, setIllegalFields] = useState([]);

    const {report_type_id} = useParams();

    const validatePageFields = () => {
        const _illegalFields = [];

        // Empty check
        [
            {label: "sectionTitle", value: sectionTitle},
        ].forEach(field => {
            if (field.value === "")
                _illegalFields.push({label: field.label, msg: "Please, fill this field"});
        });

        setIllegalFields(_illegalFields);

        showErrors(_illegalFields)

        if (_illegalFields.length === 0) {
            $("#create_section_modal").modal('hide');

            console.log(currentSection);

            if (currentSection.id === 0)
                createSection({
                    name: sectionTitle,
                    report_type_id
                }).then(e => getSections(report_type_id));

            if (currentSection.id !== 0)
                updateSection({
                    id: currentSection.id,
                    name: sectionTitle,
                    report_type_id
                }).then(e => getSections(report_type_id));
        }
    }

    const showErrors = (errors) => {
        ["name", "phone"]
            .forEach(id => $(`#${id}-error`).hide());

        // Show only illegal fields errors
        errors.forEach(error => {
            const element = $(`#${error.label}-error`);
            element.html(`<i class="icon-cancel-circle2 mr-2"/> ${error.msg}`);
            element.show();
        })
    }

    return (
        <div className="modal fade" role="dialog" aria-hidden="true" id={"create_section_modal"}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">Create new section</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="pt-2">New section title</p>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={sectionTitle}
                                           onChange={e => setSectionTitle(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={e => validatePageFields()}>Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}