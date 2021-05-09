import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';
import {FormRadioFieldModel} from "./formRadioFieldModel";

import "./require.css";

const RadioField = ({label, cases}) => {
    const [selectedCaseVal, setSelectedCaseVal] = useState('');

    return (<div className="row form__input-element form__radio-field">
        <label htmlFor=""
               className="col-form-label col-md-4">{label}</label>
        <div className="col-md-8 form__radio-field-cases-wrapper">
            {cases.map((c, k) => (
                <div key={uuidv4()} className="form__radio-field-case">
                    <label htmlFor={c.value + "-" + label + "-" + k}>
                        {c.caseType === FormRadioFieldModel.RADIO_IMAGE_CASE_TYPE
                            ? <img src={c.content} alt={label + "-" + c.value}
                                    className={"form__radio-field-image " + (c.value === selectedCaseVal
                                        ? "form__radio-field-image-selected"
                                        : ""
                                    )}
                            />
                            : <></>}
                        {c.caseType === FormRadioFieldModel.RADIO_TEXT_CASE_TYPE
                            ? <p className="form__radio-field-text">{c.content}</p>
                            : <></>}
                    </label>
                    <input
                        id={c.value + "-" + label + "-" + k} type="radio" name="asd"
                        value={c.value}
                        onChange={e => setSelectedCaseVal(e.target.value)}
                        checked={c.value === selectedCaseVal}
                        className="d-none"
                    />
                </div>
            ))}
        </div>
    </div>);
}

export default RadioField;
