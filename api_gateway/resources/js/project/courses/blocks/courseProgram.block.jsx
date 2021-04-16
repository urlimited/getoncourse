import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {MRouter} from "../../../core/mrouter/MRouter";
import {ROUTE_TO_LESSON_DETAILS_PAGE_NAME} from "../../routes";

export const CourseProgramBlock = () => {
    const {courseId} = useParams();

    return (<>
        <div className="card">
            <div className="card-title">
                <h3>Программа курса</h3>
            </div>
            <div className="card-body">
                <Link to={MRouter.initRouter().getRoute(
                    ROUTE_TO_LESSON_DETAILS_PAGE_NAME,
                    {lessonId: 0, courseId: courseId}
                )}>Создать новый урок</Link>
            </div>
        </div>
    </>)
}
