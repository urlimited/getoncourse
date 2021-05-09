import React, {useState, useEffect} from 'react'
import {FormModel} from "./formModel";
import {FormSectionModel} from "./__section/formSectionModel";

import "./require.css";

const Form = ({sections}) => {
    const form = new FormModel();

    return (<>
        {sections.map(s => new FormSectionModel(s).render())}
    </>);
}

export default Form;
