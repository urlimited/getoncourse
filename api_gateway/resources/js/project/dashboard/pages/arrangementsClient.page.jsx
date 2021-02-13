import React, {useEffect, useState} from "react";
//import HorizontalTimeline from "react-horizontal-timeline";
import {Arrangement} from "../models/arrangement.model";
import {ReportAnswer} from "../models/reportAnswer";
import {useParams} from "react-router-dom";

const ArrangementsClientPage = ({setCriteria, criteria, getArrangements, getReportDetails, setCurrentArrangement, currentArrangement, deleteArrangement}) => {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [arrangements, setArrangements] = useState([]);

    const {urlReportId} = useParams();

    useEffect(() => {
        getReportDetails(urlReportId).then(r => setCriteria(r.message.report_criterias.map(a => new ReportAnswer(a))))
        setCurrentArrangement(new Arrangement())
        getArrangements().then(r => {
            setArrangements(r.message.map(a => new Arrangement(a)));
        });
    }, []);

    useEffect(() => {
        $('.events').css('height', '4px');
    }, [arrangements]);

    return (
        <div id="arrangements-client">
            <p className="heading">Таймлайн</p>
            <div className="row">
                <div className="col-md-3 offset-9">
                    <button className="form-control primary-normal" onClick={e => {
                        $('#manage_arrangement_modal').modal('show');
                        setCurrentArrangement(new Arrangement());
                    }}>Создать мероприятие
                    </button>
                </div>
            </div>
            <div className="u-timeline">
                {/*<HorizontalTimeline
                    index={index}
                    indexClick={(next) => {
                        setPrevIndex(index);
                        setIndex(next);
                        setCurrentArrangement(new Arrangement(arrangements.sort((a, b) => a.deadline - b.deadline)[next]))
                    }}
                    styles={{background: '#005EB8', foreground: '#005EB8', outline: '#dfdfdf'}}
                    values={arrangements.sort((a, b) => a.deadline - b.deadline).map(a => a.deadline * 1000)}/>*/}
            </div>
            <div className="u-content">
                <div className="row">
                    <div className="col-md-8">
                        {currentArrangement.id !== 0 ?

                            <div className="row">
                                <div className="col-md-9">
                                    <p className="heading">{currentArrangement.name}</p>
                                </div>
                                <div className="col-md-3 text-right">
                                    <button className="text-primary btn" onClick={
                                        e => {
                                            $('#manage_arrangement_modal').modal('show');
                                        }
                                    }><i className="icon-pencil3"/></button>
                                    <button className="text-danger btn ml-1"
                                            onClick={e => deleteArrangement(currentArrangement.id)}><i
                                        className="icon-bin2"/></button>
                                </div>
                            </div>

                            : <>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text-center text-muted">Выберите мероприятие из таймлайна или
                                            создайте новое</p>
                                    </div>
                                </div>
                            </>}

                        <div className="row mt-2">
                            <div className="col-md-12">
                                <p className="text-muted">{criteria.find(c => c.id === currentArrangement.criteria_id)?.content ?? ""}</p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <p>{currentArrangement.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p className="heading">Фильтры</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ArrangementsClientPage;
