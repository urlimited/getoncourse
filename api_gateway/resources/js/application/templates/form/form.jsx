import React, {useState, useEffect} from 'react'
import {FormModel} from "./formModel";
import {FormSectionModel} from "./__section/formSectionModel";

import "./require.css";

const Form = ({sections, saveHandler}) => {
    const [form, setForm] = useState(
        new FormModel({
            sections: sections.map(s => new FormSectionModel(s)),
        })
    );

    useEffect(() => {
        setForm(new FormModel({
            sections: sections.map(s => new FormSectionModel(s)),
        }));
    }, [sections]);

    return (<>
        {form.getSections().map(s => s.render())}
        <div className="row">
            <div className="offset-9 col-md-3">
                <button
                    className="form-control btn-primary"
                    onClick={e => form.apiSaveOnServer(saveHandler)}>Сохранить
                </button>
            </div>
        </div>
    </>);
}

export default Form;
