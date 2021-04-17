import React, {useEffect} from 'react'
import './sidebar__link-item.css'

const sidebar__linkItem = ({route, title}) => {
    const breadcrumbs = location.pathname

    return (
        //TODO must to think about realize activeroute style
        <li className={breadcrumbs.search(route)===-1?"":"mm-active"}>
            <a className=" waves-effect" href={route}>
                <i className="bx bx-chat"/>
                <span>{title}</span>
            </a>
        </li>
    )

}

export default sidebar__linkItem
