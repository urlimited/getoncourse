import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ROUTE_TO_SINGLE_REPORT} from "../../routes";
import {
    CRITERIA_ANSWER_FULL,
    CRITERIA_ANSWER_HALF,
    CRITERIA_ANSWER_ZERO
} from "../models/reportAnswer";
import history from "../../../core/services/history";
import {Report} from "../models/report.model";
import {Section} from "../models/section.model";
//import ReactHtmlParser from "react-html-parser";
//import ReactHintFactory from 'react-hint';
//import 'react-hint/css/index.css';

export const SingleReportClientSectionPage = ({getSectionsByReport, setPageBreadcrumbs, getReportDetails, updateReport}) => {
    const [illegalFields, setIllegalFields] = useState([]);

    const [report, setReport] = useState(new Report());
    const [section, setSection] = useState(new Section());
    //const ReactHint = ReactHintFactory(React)

    const {urlReportId, urlSectionId} = useParams();

    useEffect(() => {
        // TODO: Sdelat' prisvaivanie breadcrumbs
        Promise.all([getSectionsByReport(urlReportId), getReportDetails(urlReportId)])
            .then(([rSections, rReportDetails]) => {
                setSection(new Section(rSections.message.find(s => s.id === parseInt(urlSectionId))));
                setReport(new Report(rReportDetails.message));
                setPageBreadcrumbs(new Report({
                    ...rReportDetails.message,
                    id: urlReportId
                }), new Section(rSections.message.find(s => s.id === parseInt(urlSectionId))))
            });
    }, []);

    useEffect(() => {
        console.log(report);
    }, [report]);

    const _checkIt = (target, answerId) => {
        if (target.checked)
            setReport({
                ...report,
                answers: report.answers.map(a => {
                    if (a.id === answerId)
                        return {
                            ...a,
                            answer: target.value
                        }

                    return a;
                })
            });
    };

    const validatePageFields = () => {
        const _illegalFields = [];

        // Empty check
        /*[
            {label: "criteriaContent", value: selectedReportType},
        ].forEach(field => {
            if (field.value === "" || field.value === 0)
                _illegalFields.push({label: field.label, msg: "Please, fill this field"});
        });*/

        setIllegalFields(_illegalFields);

        showErrors(_illegalFields)

        if (_illegalFields.length === 0) {
            updateReport({
                report_id: urlReportId,
                status_id: 1,
                answers: report.answers.filter(a => a.sectionId === parseInt(urlSectionId))
                    .map(a => ({
                        ...a,
                        section_id: a.sectionId,
                        criteria_id: a.criteriaId
                    }))
            }).then(e => history.push(ROUTE_TO_SINGLE_REPORT + urlReportId));
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

    const _checkRadio = () => {

    }

    const onRenderContent = (target, content) => {
        return <div className="custom-hint__content">{content}</div>
    }

    return (
        <>
            <ReactHint autoPosition events delay />
            <ReactHint persist
                       attribute="data-custom"
                       className="custom-hint"
                       events={{click: true}}
                       onRenderContent={(target, content) => onRenderContent(target, content)}/>

            <div className="card">
                <img src="/images/image_2.png" alt=""/>
            </div>
            <div className="card" id="single-report">
                <div className="card-header header-elements-inline">
                    <p className="card-title mt-heading">{section.name}</p>
                </div>
                <div className="card-body">
                    <div className="row mt-3">
                        <div className="col-md-12">
                            {report.answers.filter(a => a.sectionId === parseInt(urlSectionId))
                                .map((a, i) => (
                                    <div className="row mt-3">
                                        <div className="col-md-1">
                                            <span>{i + 1})</span>
                                            <span className="q-hint" data-rh-at="top" data-rh={a.hint}>?</span>
                                        </div>
                                        <div className="col-md-5">
                                            {/*<p>{ReactHtmlParser(a.content
                                                .replaceAll('●', '<br /> - '))}</p>*/}
                                        </div>
                                        <div className="col-md-2">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <input type="radio" id={"full" + a.id} name={"crn" + a.id}
                                                           checked={a.answer === CRITERIA_ANSWER_FULL}
                                                           value={CRITERIA_ANSWER_FULL} style={{verticalAlign: top}}
                                                           onChange={e => _checkIt(e.target, a.id)}/>
                                                </div>
                                                <div className="col-md-9">
                                                    <label className="font-size-xs" htmlFor={"full" + a.id}
                                                           style={{verticalAlign: top}}>Соответствует</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <input type="radio" id={"half" + a.id} name={"crn" + a.id}
                                                           checked={a.answer === CRITERIA_ANSWER_HALF}
                                                           value={CRITERIA_ANSWER_HALF} style={{verticalAlign: top}}
                                                           onChange={e => _checkIt(e.target, a.id)}/>
                                                </div>
                                                <div className="col-md-9">
                                                    <label className="font-size-xs" htmlFor={"half" + a.id}
                                                           style={{verticalAlign: top}}>Частично соответствует</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <input type="radio" id={"zero" + a.id} name={"crn" + a.id}
                                                           checked={a.answer === CRITERIA_ANSWER_ZERO}
                                                           value={CRITERIA_ANSWER_ZERO} style={{verticalAlign: top}}
                                                           onChange={e => _checkIt(e.target, a.id)}/>
                                                </div>
                                                <div className="col-md-9">
                                                    <label className="font-size-xs" htmlFor={"zero" + a.id}
                                                           style={{verticalAlign: top}}>Не соответствует</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            {[CRITERIA_ANSWER_FULL, CRITERIA_ANSWER_HALF].includes(a.answer)
                                                ? <textarea cols="30" rows="4" className="form-control font-size-sm"
                                                            placeholder="Просьба указать подтверждение соответствия критерия (документ, процесс, система и т.д.)"
                                                            value={a.comment}
                                                            onChange={e => setReport({
                                                                ...report,
                                                                answers: report.answers.map(ans => {
                                                                    if (ans.id === a.id)
                                                                        return ({
                                                                            ...ans,
                                                                            comment: e.target.value
                                                                        })

                                                                    return ans;
                                                                })
                                                            })}/>
                                                : <></>
                                            }
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-3 offset-md-9">
                            <button className="btn btn-primary form-control"
                                    onClick={e => validatePageFields()}>Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
