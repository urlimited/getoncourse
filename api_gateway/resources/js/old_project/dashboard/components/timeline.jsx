import React, {useEffect, useState} from "react";

export const Timeline = ({values}) => {
    const [currentSlide, setCurrentSlide] = useState();
    const [processedValues, setProcessedValues] = useState();

    useEffect(() => {
        setProcessedValues(values
            .map(v => (new Date(v)))
            .sort()
            .reduce((accum, next) => {

            }, [])
        );
    }, [values]);

    return (
        <>
            <p>Timeline</p>
            <div>
                <div style={{}}></div>
            </div>
        </>

    )
}