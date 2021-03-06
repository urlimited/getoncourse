import React, {useEffect} from 'react'
import './sidebar__link-item.css'
import {Link} from "react-router-dom";

const sidebar__linkItem = ({route, title}) => {
    const breadcrumbs = location.pathname

    return (
        //TODO must to think about realize activeroute style
        <li className={breadcrumbs.search(route)===-1?"":"mm-active"}>
            <Link className=" waves-effect" to={route}>
                <i className="bx bx-chat"/>
                <span>{title}</span>
            </Link>
        </li>
    )

}

export default sidebar__linkItem
