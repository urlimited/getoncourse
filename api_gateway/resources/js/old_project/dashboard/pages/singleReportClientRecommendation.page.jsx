import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {
    CRITERIA_ANSWER_HALF, CRITERIA_ANSWER_ZERO,
} from "../models/reportAnswer";
import {Report} from "../models/report.model";
import ReactHtmlParser from 'react-html-parser';
//import {ROUTE_TO_ARRANGEMENTS} from "../../routes";

export const SingleReportClientRecommendation = ({init, setPageBreadcrumbs, sections, getSectionsByReport, getReportDetails}) => {
    const [report, setReport] = useState(new Report());
    const [openedSectionIndex, setOpenedSectionIndex] = useState(0);

    const {urlReportId} = useParams();

    useEffect(() => {
        getSectionsByReport(urlReportId);
        // TODO: Sdelat' prisvaivanie breadcrumbs
        getReportDetails(urlReportId)
            .then((rReportDetails) => {
                setReport(new Report({...rReportDetails.message, id: urlReportId}));
                setPageBreadcrumbs(new Report({...rReportDetails.message, id: urlReportId}));
            });
    }, []);

    useEffect(() => {
        console.log(report);
        init({
            donut: {
                ctx: document.getElementById('total-score'),
                totalScore: report.score * 100
            }
        });
    }, [report]);

    /*useEffect(() => {
        console.log(openedSectionIndex);
    }, [openedSectionIndex]);*/

    return (
        <div className="card" id="recommendation-client">
            <div className="card-header header-elements-inline">
                <p className="card-title mt-heading">Результаты самооценивания </p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <div className="recommendation-tile">
                            <div className="report-score">
                                <p className="report-score-number">{Math.round(report.score * 100)}</p>
                                <p className="report-score-percent">%</p>
                                <p className="report-score-sub-text">Итого <br/> соответствие</p>
                            </div>
                            <canvas id="total-score" style={{maxHeight: "200px", maxWidth: "200px"}}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    {sections.filter((s, k) => k < ((sections.length) / 2))
                                        .map(s => <div className="col-md-12 recommendation-tile-section left">
                                            <div className="bg-holder">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="u-progress">
                                                            <div className="u-progress-bar"
                                                                 style={{width: `${(s.score) * 100}%`}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-md-2" style={{minWidth: "30px"}}>
                                                        <p className="u-percent">
                                                            <span
                                                                className="d-inline-block u-percent-content">{Math.round(s.score * 100)}</span>
                                                            <span
                                                                className="font-size-sm d-inline-block u-percent-sign">%</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="u-text">
                                                            <p>{s.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    {sections.filter((s, k) => k >= ((sections.length) / 2))
                                        .map(s => <div className="col-md-12 recommendation-tile-section right">
                                            <div className="bg-holder">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="u-progress">
                                                            <div className="u-progress-bar"
                                                                 style={{width: `${(s.score) * 100}%`}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-md-2" style={{minWidth: "30px"}}>
                                                        <p className="u-percent">
                                                            <span
                                                                className="d-inline-block u-percent-content">{Math.round(s.score * 100)}</span>
                                                            <span
                                                                className="font-size-sm d-inline-block u-percent-sign">%</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="u-text">
                                                            <p>{s.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="row">
                    <div className="col-md-4 offset-8">
                        <a href={ROUTE_TO_ARRANGEMENTS + urlReportId} className="d-inline-block text-center form-control primary-normal">Создать план мероприятий</a>
                    </div>
                </div>*/}
                <div className="row mt-5">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs nav-tabs-highlight nav-justified mb-0">
                            {sections.map((s, i) => <li className="nav-item">
                                <a href={"#bordered-justified-tab" + (i + 1)}
                                   className={"nav-link " + (i === openedSectionIndex ? "active" : "")}
                                   onClick={e => setOpenedSectionIndex(i)}
                                   data-toggle="tab">Компонент {i + 1}</a>
                            </li>)}
                        </ul>
                    </div>

                    <div className="col-md-12">
                        <div className="recommendations-block">
                            {sections.filter((s, i) => i === openedSectionIndex)
                                .map(s => report.answers.filter(a => a.advice !== "")
                                    .some(a => a.sectionId === s.id)
                                    ? <div className="section mt-4">
                                        <p className="section-title heading">{s.name}</p>
                                        <p className="section-sub-title text-muted font-size-sm">(полностью не
                                            соответствуют {report.answers.filter(a => a.answer === CRITERIA_ANSWER_ZERO && a.sectionId === s.id).length} и
                                            частично
                                            соответствуют {report.answers.filter(a => a.answer === CRITERIA_ANSWER_HALF && a.sectionId === s.id).length} из {report.answers.filter(a => a.sectionId === s.id).length} критериев)</p>
                                        <div className="answer-list">
                                            {report.answers.filter(a => a.sectionId === s.id && a.advice !== "")
                                                .map(a => <div className="answer">
                                                    <hr/>
                                                    <div className="d-inline-block answer-mark">
                                                        <span
                                                            className={(a.answer === CRITERIA_ANSWER_HALF ? "half" : "zero")}/>
                                                    </div>
                                                    <div className="d-inline-block answer-content">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <p>Рекомендация:</p>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <p>{ReactHtmlParser(a.advice.replaceAll('●', '<br /> - '))}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-md-2">
                                                                <p className="text-muted">Критерий:</p>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <p className="text-muted font-size-sm">{ReactHtmlParser(a.content.replaceAll('●', '<br /> - '))}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>)}
                                        </div>


                                    </div>
                                    : <>
                                        <div className="section mt-4">
                                            <p className="section-title heading">{s.name}</p>
                                            <p className="section-sub-title text-muted font-size-sm">Все критерии по
                                                данному компоненту полностью соответствуют</p>
                                        </div>
                                    </>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-md-12">
                        <p className="heading">Легенда:</p>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-5">
                        <div className="d-inline-block">
                            <div className="answer-mark d-inline-block">
                                <span className="zero"/>
                            </div>
                            <span className="d-inline-block">не соответствует</span>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="d-inline-block">
                            <div className="answer-mark d-inline-block">
                                <span className="half"/>
                            </div>
                            <span className="d-inline-block">частично соответствует</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}