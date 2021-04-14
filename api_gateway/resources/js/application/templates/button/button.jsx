import React, {useEffect, useState} from "react";
import "./button.css";


export const Button = ({title, clickHandler, classes}) => {
    const classesProcessed = classes.reduce((accum, next) => accum + " " + next, "").trim();

    return (<button className={"button " + classesProcessed} onClick={clickHandler}>{title}</button>);
}

export default Button;
