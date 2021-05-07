import React from "react";
import Sidebar__linkTitle from "./__link-title/sidebar__link-title";
import Sidebar__linkItem from "./__link-item/sidebar__link-item"

export const Sidebar = ({menuContent}) => {
    return (
        <div className="vertical-menu" id="vertical-menu">
            <div data-simplebar="true" className="h-100">
                <div data-simplebar="init" style={{maxHeight: "100%"}}>
                    <div className="simplebar-wrapper" style={{margin: "0"}}>
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"/>
                        </div>
                        <div style={{right: "0", bottom: "0"}}>
                            <div className="simplebar-content-wrapper"
                                 style={{height: "auto", overflow: "hidden scroll"}}>
                                <div className="simplebar-content" style={{padding: "0"}}>
                                    <div id="sidebar-menu" className="mm-show">
                                        <ul className="metismenu list-unstyled mm-show mm-active" id="side-menu">
                                            {menuContent.map((m, k) => (
                                                // Undefined here is okay
                                                m.isAccessible !== false
                                                    ? <div key={'Sidebar__linkTitle-' + k}>
                                                        <Sidebar__linkTitle title={m.title}/>
                                                        {m.items.map((item, j) => (
                                                            item.isAccessible !== false
                                                                ?
                                                                <Sidebar__linkItem title={item.itemTitle}
                                                                                   route={item.itemRoute}
                                                                                   key={'Sidebar__linkItem-' + k + '-' + j} />
                                                                : ''
                                                        ))}
                                                    </div>
                                                    : ''
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
