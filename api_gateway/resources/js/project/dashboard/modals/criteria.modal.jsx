import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const CriteriaModals = ({updateCriteria, getCriteria, createCriteria, currentCriteria}) => {
    const [criteriaContent, setCriteriaContent] = useState("");
    const [criteriaFullAdvice, setCriteriaFullAdvice] = useState("");
    const [criteriaPartiallyAdvice, setCriteriaPartiallyAdvice] = useState("");

    const [illegalFields, setIllegalFields] = useState([]);

    const {section_id} = useParams();

    useEffect(() => {
        setCriteriaContent(currentCriteria.content);
        setCriteriaFullAdvice(currentCriteria.halfAdvice);
        setCriteriaPartiallyAdvice(currentCriteria.zeroAdvice);
    }, [currentCriteria]);

    const validatePageFields = () => {
        const _illegalFields = [];

        // Empty check
        [
            {label: "criteriaContent", value: criteriaContent},
            {label: "criteriaFullAdvice", value: criteriaFullAdvice},
            {label: "criteriaPartiallyAdvice", value: criteriaPartiallyAdvice},
        ].forEach(field => {
            if (field.value === "")
                _illegalFields.push({label: field.label, msg: "Please, fill this field"});
        });

        setIllegalFields(_illegalFields);

        showErrors(_illegalFields)

        if (_illegalFields.length === 0) {
            $("#create_section_modal").modal('hide');

            console.log(currentCriteria);

            if (currentCriteria.id === 0)
                createCriteria({
                    content: criteriaContent,
                    half_advice: criteriaFullAdvice,
                    zero_advice: criteriaPartiallyAdvice,
                    section_id
                }).then(e => getCriteria(section_id));

            if (currentCriteria.id !== 0)
                updateCriteria({
                    id: currentCriteria.id,
                    content: criteriaContent,
                    half_advice: criteriaFullAdvice,
                    zero_advice: criteriaPartiallyAdvice,
                    section_id
                }).then(e => getCriteria(section_id));
        }
    }

    const showErrors = (errors) => {
        ["criteriaContent", "criteriaFullAdvice", "criteriaPartiallyAdvice"]
            .forEach(id => $(`#${id}-error`).hide());

        // Show only illegal fields errors
        errors.forEach(error => {
            const element = $(`#${error.label}-error`);
            element.html(`<i class="icon-cancel-circle2 mr-2"/> ${error.msg}`);
            element.show();
        })
    }

    return (
        <div className="modal fade" role="dialog" aria-hidden="true" id={"create_criteria_modal"}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">
                            {currentCriteria.id === 0 ? "Create new criteria" : "Update criteria"}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-4">
                                <p className="pt-2">{currentCriteria.id === 0
                                    ? "Create new criteria"
                                    : "Update criteria"}</p>
                            </div>
                            <div className="col-md-8">
                                <textarea className="form-control" cols="30" rows="5" value={criteriaContent}
                                          onChange={e => setCriteriaContent(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <p>Advice if partially fulfilled</p>
                            </div>
                            <div className="col-md-8">
                                <textarea className="form-control" cols="30" rows="5" value={criteriaPartiallyAdvice}
                                          onChange={e => setCriteriaPartiallyAdvice(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <p>Advice if nothing fulfilled</p>
                            </div>
                            <div className="col-md-8">
                                <textarea className="form-control" cols="30" rows="5" value={criteriaFullAdvice}
                                          onChange={e => setCriteriaFullAdvice(e.target.value)}/>
                            </div>
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