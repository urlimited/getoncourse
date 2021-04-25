import React, {useEffect, useState} from "react";
import "./button.css";
import {Link} from "react-router-dom";
import {MRouter} from "../../../core/mrouter/MRouter";


export const Button = ({title, clickHandler, classes = [], routeLink}) => {
    const router = MRouter.initRouter({basePath: ''});
    /*const classesProcessed = classes.reduce((accum, next) => accum + " " + next, "").trim();*/

    const defaultClasses = ['btn']

    return (
        routeLink ?
            <Link to={router.getRoute(routeLink.routeValue, routeLink.routeParams)}>
                <button className={classes ? defaultClasses.concat(classes).join(" ") : defaultClasses.join(" ")}
                        onClick={clickHandler}>{title}</button>
            </Link> :
            <button className={classes ? defaultClasses.concat(classes).join(" ") : defaultClasses.join(" ")}
                    onClick={clickHandler}>{title}</button>

    )
}

export default Button;
