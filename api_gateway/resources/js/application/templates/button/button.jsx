import React from 'react';
import "./require.css";

const Button = ({title, clickHandler}) => {
    return (
        <button onClick={clickHandler} className="button">{title}</button>
    )
}

export default Button
