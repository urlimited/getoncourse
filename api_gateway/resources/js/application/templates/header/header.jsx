import React, {useState} from "react";

const Header = () => {
    const [collapsedMenu, setCollapsedMenu] = useState(false)
    return (
        <>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box" id="navbar-brand">
                            <a className="logo logo-dark" href="/">
                            <span className="logo-sm">
                                <img src="/static/logo.a0143fa8.svg" alt="" height="22"/>
                            </span>
                                <span className="logo-lg">
                                <img src="data:image/png;base64,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"
                                     alt="" height="17"/>
                            </span>
                            </a>
                            <a className="logo logo-light" href="/">
                            <span className="logo-sm">
                                <img src="/static/logo-light.96c274da.svg" alt="" height="22"/>
                            </span>
                                <span className="logo-lg"><img
                                    src="data:image/png;base64,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"
                                    alt="" height="19"/>
                            </span>
                            </a>
                        </div>
                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                                id="vertical-menu-btn"
                                onClick={()=>{
                                    const collapseStyles = ["vertical-collpsed", "sidebar-enable"]
                                    const body = document.body
                                    collapsedMenu?collapseStyles.map(c=>body.classList.remove(c)):collapseStyles.map(c=>body.classList.add(c))
                                    setCollapsedMenu(!collapsedMenu)
                                }}>
                            <i className="fa fa-fw fa-bars"/>
                        </button>
                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Поиск..."/>
                                <span className="bx bx-search-alt"/>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex">

                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button type="button" className="btn header-item noti-icon waves-effect"
                                    id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                <i className="mdi mdi-magnify" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                 aria-labelledby="page-header-search-dropdown">

                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..."
                                                   aria-label="Recipient's username" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="submit">
                                                        <i className="mdi mdi-magnify" />
                                                    </button>
                                                </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon waves-effect"
                                    id="page-header-notifications-dropdown" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-bell bx-tada" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                 aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0" key="t-notifications"> Notifications </h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#!" className="small" key="t-view-all"> View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar="init" style={{maxHeight: "230px"}}>
                                    <div className="simplebar-wrapper" style={{margin: 0}}>
                                        <div className="simplebar-height-auto-observer-wrapper">
                                            <div className="simplebar-height-auto-observer"/>
                                        </div>
                                        <div className="simplebar-mask">
                                            <div className="simplebar-offset" style={{right: 0, bottom: 0}}>
                                                <div className="simplebar-content-wrapper"
                                                     style={{height: 'auto', paddingRight: 0, paddingBottom: 0, overflow: 'hidden'}}>
                                                    <div className="simplebar-content" style={{padding: 0}}>
                                                        <a href="" className="text-reset notification-item">
                                                            <div className="media">
                                                                <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="bx bx-cart" />
                                                </span>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mt-0 mb-1" key="t-your-order">Your
                                                                        order is placed</h6>
                                                                    <div className="font-size-12 text-muted">
                                                                        <p className="mb-1" key="t-grammer">If several
                                                                            languages coalesce the grammar</p>
                                                                        <p className="mb-0"><i
                                                                            className="mdi mdi-clock-outline" /> <span
                                                                            key="t-min-ago">3 min ago</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="" className="text-reset notification-item">
                                                            <div className="media">
                                                                <img src="/template/images/avatar-3.jpg"
                                                                     className="me-3 rounded-circle avatar-xs"
                                                                     alt="user-pic" />
                                                                    <div className="media-body">
                                                                        <h6 className="mt-0 mb-1">James Lemire</h6>
                                                                        <div className="font-size-12 text-muted">
                                                                            <p className="mb-1" key="t-simplified">It
                                                                                will seem like simplified English.</p>
                                                                            <p className="mb-0">
                                                                                <i className="mdi mdi-clock-outline" />
                                                                                <span key="t-hours-ago">1 hours ago</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                        </a>
                                                        <a href="" className="text-reset notification-item">
                                                            <div className="media">
                                                                <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                                    <i className="bx bx-badge-check" />
                                                </span>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mt-0 mb-1" key="t-shipped">Your item
                                                                        is shipped</h6>
                                                                    <div className="font-size-12 text-muted">
                                                                        <p className="mb-1" key="t-grammer">If several
                                                                            languages coalesce the grammar</p>
                                                                        <p className="mb-0">
                                                                            <i className="mdi mdi-clock-outline" />
                                                                            <span key="t-min-ago">3 min ago</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>

                                                        <a href="" className="text-reset notification-item">
                                                            <div className="media">
                                                                <img src="/template/images/avatar-4.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                                                    <div className="media-body">
                                                                        <h6 className="mt-0 mb-1">Salena Layfield</h6>
                                                                        <div className="font-size-12 text-muted">
                                                                            <p className="mb-1" key="t-occidental">As a
                                                                                skeptical Cambridge friend of mine
                                                                                occidental.</p>
                                                                            <p className="mb-0">
                                                                                <i className="mdi mdi-clock-outline" />
                                                                                <span key="t-hours-ago">1 hours ago</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="simplebar-placeholder" style={{width: 0, height: 0}} />
                                    </div>
                                    <div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}>
                                        <div className="simplebar-scrollbar"
                                             style={{transform: 'translate3d(0px, 0px, 0px)', display: 'none'}} />
                                    </div>
                                    <div className="simplebar-track simplebar-vertical" style={{visibility: 'hidden'}}>
                                        <div className="simplebar-scrollbar"
                                             style={{transform: 'translate3d(0px, 0px, 0px)', display: 'none'}} />
                                    </div>
                                </div>
                                <div className="p-2 border-top d-grid">
                                    <a className="btn btn-sm btn-link font-size-14 text-center"
                                       href="javascript:void(0)">
                                        <i className="mdi mdi-arrow-right-circle me-1"/>
                                        <span key="t-view-more">View More..</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect"
                                    id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="true">
                                <img className="rounded-circle header-profile-user"
                                     src="/template/images/avatar-1.jpg" alt="Header Avatar" />
                                    <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end"
                                 data-popper-placement="bottom-end">
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-user font-size-16 align-middle me-1"/>
                                    <span key="t-profile">Profile</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-wallet font-size-16 align-middle me-1" />
                                    <span key="t-my-wallet">My Wallet</span>
                                </a>
                                <a className="dropdown-item d-block" href="#">
                                    <span className="badge bg-success float-end">11</span>
                                    <i className="bx bx-wrench font-size-16 align-middle me-1"/>
                                    <span key="t-settings">Settings</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-lock-open font-size-16 align-middle me-1" />
                                    <span key="t-lock-screen">Lock screen</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item text-danger" href="#">
                                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                                    <span key="t-logout">Logout</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
