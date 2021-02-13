import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import SelectPicker from "react-select";
//import {Editor, EditorState} from 'draft-js';
//import 'draft-js/dist/Draft.css';

export const ArrangementsModals = ({criteria, currentArrangement, getArrangements, updateArrangement, createArrangement}) => {
    const [arrName, setArrName] = useState("");
    const [arrDescription, setArrDescription] = useState("");
    const [arrDeadline, setArrDeadline] = useState(0);
    const [arrCriteriaId, setArrCriteriaId] = useState(0);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const [illegalFields, setIllegalFields] = useState([]);

    const {urlReportId} = useParams();

    useEffect(() => {
        setArrName(currentArrangement.name);
        setArrDeadline(currentArrangement.deadline);
        setArrDescription(currentArrangement.description);
        setArrCriteriaId(currentArrangement.criteriaId);
    }, [currentArrangement]);

    const validatePageFields = () => {
        const _illegalFields = [];

        // Empty check
        [
            {label: "arrName", value: arrName},
            {label: "arrDescription", value: arrDescription},
            {label: "arrDeadline", value: arrDeadline},
            {label: "arrCriteriaId", value: arrCriteriaId},
        ].forEach(field => {
            if (field.value === "")
                _illegalFields.push({label: field.label, msg: "Пожалуйста, заполните это поле"});
        });

        setIllegalFields(_illegalFields);

        showErrors(_illegalFields)

        if (_illegalFields.length === 0) {
            $("#manage_arrangement_modal").modal('hide');

            if (currentArrangement.id === 0)
                createArrangement({
                    name: arrName,
                    description: arrDescription,
                    deadline: +arrDeadline / 1000,
                    report_criteria_id: arrCriteriaId.value,
                    report_id: urlReportId
                }).then(e => getArrangements(urlReportId));

            if (currentArrangement.id !== 0)
                updateArrangement({
                    id: currentArrangement.id,
                    name: arrName,
                    description: arrDescription,
                    deadline: +arrDeadline / 1000,
                    report_criteria_id: arrCriteriaId.value
                }).then(e => getArrangements(urlReportId));
        }
    }

    const showErrors = (errors) => {
        ["arrName", "arrDescription", "arrDeadline", "arrCriteriaId"]
            .forEach(id => $(`#${id}-error`).hide());

        // Show only illegal fields errors
        errors.forEach(error => {
            const element = $(`#${error.label}-error`);
            element.html(`<i class="icon-cancel-circle2 mr-2"/> ${error.msg}`);
            element.show();
        })
    }

    return (
        <div className="modal fade" role="dialog" aria-hidden="true" id={"manage_arrangement_modal"}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title">Управление мероприятиями</p>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-4">
                                <p className="pt-2">Наименование мероприятия</p>
                            </div>
                            <div className="col-md-8">
                                {/*<Editor editorState={editorState} onChange={setEditorState} />*/}
                                <textarea className="form-control" cols="30" rows="2"
                                          value={arrName} onChange={e => setArrName(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <span id="arrName-error" className="text-danger" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <p>Описание мероприятия</p>
                            </div>
                            <div className="col-md-8">
                                <textarea className="form-control" cols="30" rows="5"
                                          value={arrDescription} onChange={e => setArrDescription(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <span id="arrDescription-error" className="text-danger"/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <p>Укажите дедлайн</p>
                            </div>
                            <div className="col-md-8">
                                <DatePicker
                                    className="form-control"
                                    selected={arrDeadline}
                                    onChange={date => setArrDeadline(date)}
                                />
                            </div>
                            <div className="col-md-12">
                                <span id="arrDeadline-error" className="text-danger" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <p>Укажите критерий, к которому относится мероприятие</p>
                            </div>
                            <div className="col-md-8">
                                <SelectPicker
                                    placeholder="Выберите критерий"
                                    options={criteria.map(c => ({label: c.content, value: c.id}))}
                                    onChange={val => {
                                        console.log(val);
                                        setArrCriteriaId(val)
                                    }}
                                />
                            </div>
                            <div className="col-md-12">
                                <span id="arrDeadline-error" className="text-danger" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <button type="button" className="btn btn-primary" onClick={e => validatePageFields()}>Создать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
