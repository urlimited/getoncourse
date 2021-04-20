import React, {useEffect, useState} from "react";
import "./button.css";


export const Button = ({title, clickHandler, classes = []}) => {
    /*const classesProcessed = classes.reduce((accum, next) => accum + " " + next, "").trim();*/

    const defaultClasses = ['btn']

    //classes?defaultClasses=defaultClasses.concat(classes):null
    return (
        <button className={classes?defaultClasses.concat(classes).join(" "):defaultClasses.join(" ")}
                onClick={clickHandler}>{title}</button>);
}

export default Button;
