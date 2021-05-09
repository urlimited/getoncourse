import React, {useState, useEffect} from 'react'

import "./require.css";

const FormSection = ({label, inputs}) => {

    return (<div className="form__section">
        <div className="form__section-label-wrapper">
            <p className="form__section-label">{label}</p>
        </div>
        {inputs.map(e => e.render())}
    </div>);
}

export default FormSection;
