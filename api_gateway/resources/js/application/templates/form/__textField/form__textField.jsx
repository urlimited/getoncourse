import React, {useState, useEffect} from 'react'
import './require.css';

const TextField = ({label, placeholder, setValue, initialValue, rules}) => {
    const [content, setContent] = useState(initialValue ?? '');
    const [isErrorBoxShown, setIsErrorBoxShown] = useState(false);

    useEffect(() => {
        const contentIsValid = rules
            .map(r => r.validate(content))
            .reduce((accum, next) => (accum === true && next === true), true);

        if(contentIsValid){
            setValue(content);
            setIsErrorBoxShown(false);
        }
        else
            setIsErrorBoxShown(true);
    },[content]);

    return (<div className="row form__input-element">
        <label htmlFor=""
            className="col-form-label col-md-4">{label}</label>
        <div className="col-md-8">
            <input
                className="form-control"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder={placeholder}
            />
            {isErrorBoxShown
                ? <p className="form__input-element-error-message">Пожалуйста, проверьте это поле еще раз</p>
                : <></>}
        </div>
    </div>);
}

export default TextField;
