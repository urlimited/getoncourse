import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const ReportsClientModal = ({getReports, reportTypes, createReport, closeReport, currentReport}) => {
    const [selectedReportType, setSelectedReportType] = useState(0);

    const {urlReportTypeId} = useParams();

    const validatePageFields = () => {
        const _illegalFields = [];

        showErrors(_illegalFields)

        if (_illegalFields.length === 0) {
            $("#create_report_modal").modal('hide');


            createReport({
                report_type_id: urlReportTypeId !== undefined ? parseInt(urlReportTypeId) : selectedReportType,
            }).then(e => getReports());
        }
    }

    useEffect(() => {
        console.log(currentReport);
    }, [currentReport]);

    const showErrors = (errors) => {
        // Show only illegal fields errors
        errors.forEach(error => {
            const element = $(`#${error.label}-error`);
            element.html(`<i class="icon-cancel-circle2 mr-2"/> ${error.msg}`);
            element.show();
        })
    }

    return (<>
        <div className="modal fade" role="dialog" aria-hidden="true" id={"create_report_modal"}>
            <div className={urlReportTypeId !== undefined ? "modal-dialog modal-sm" : "modal-dialog"}>
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="heading modal-title" id="exampleModalLabel">Создать новый отчет</p>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {urlReportTypeId !== undefined
                            ? <p>Подтвердите, пожалуйста, создание нового отчета {{
                                1: "Оценка систем управления рисками и внутреннего контроля",
                                2: "Оценка риск культуры"
                            }[parseInt(urlReportTypeId)]}</p>
                            : <>
                                <p>Выберите, пожалуйста, тип нового отчета:</p>
                                {reportTypes.map(rt => (
                                    <button className={"rounded-button mt-2 " + (selectedReportType === rt.id ? {
                                        1: "primary-normal",
                                        2: "secondary-violet-dark",
                                        3: "secondary-violet-light",
                                        4: "tertiary-green-light"
                                    }[rt.id] : "")}
                                            onClick={e => setSelectedReportType(rt.id)}>{{
                                        1: "Оценка систем управления рисками и внутреннего контроля",
                                        2: "Оценка риск культуры"
                                    }[parseInt(rt.id)]}</button>))}
                            </>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <button type="button" className="btn btn-primary" onClick={e => validatePageFields()}>Создать
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" role="dialog" aria-hidden="true" id={"confirm_report_modal"}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="heading modal-title" id="exampleModalLabel">Завершить заполнение отчета ?</p>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>После завершения отчета, его нельзя будет изменить, если вы действительно хотите завершить данный отчет, подтвердите, пожалуйста</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <button type="button" className="btn btn-primary" onClick={e => {
                            closeReport(currentReport.id).then(r => getReports());
                            $('#confirm_report_modal').modal('hide');
                        }}>Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}