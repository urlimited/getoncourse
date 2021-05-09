import React, {useState, useEffect} from 'react'

const TextField = ({label, placeholder}) => {
    const [content, setContent] = useState('');

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
        </div>
    </div>);
}

export default TextField;
