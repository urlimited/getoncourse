import React, {useState, useEffect} from 'react'
import CourseGeneralInfoBlock from "../containers/courseGeneralInfo.block_cont";
import CourseStatisticsBlock from "../containers/courseStatistics.block_cont";
import CourseProgramBlock from "../containers/courseProgram.block_cont";

export const CourseDetailsPage = () => {
    return (<>
        <div className="row">
            <div className="col-md-8">
                <CourseGeneralInfoBlock />
                <CourseProgramBlock />
            </div>
            <div className="col-md-4">
                <CourseStatisticsBlock />
            </div>
        </div>
    </>)
}
