import React, {useEffect} from "react";
import HeaderBlock from "../containers/blocks/header.container";
import SidebarBlock from "../containers/blocks/sidebar.container";
//import FooterBlock from "../containers/blocks/footer.container";
//import BreadcrumbsBlock from "../containers/blocks/breadcrumbs.container";
import TitleBlock from "../containers/blocks/title.container";
import {useLocation} from 'react-router-dom';
//import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import Loader from "../containers/components/loader.container";

const DashboardLayout = ({user, Page, getUser, title, Modals="null"}) => {
    const location = useLocation();
    useEffect(() => {
        getUser();
        //setPageBreadcrumbs();
    }, []);
    return (
        <>
            <HeaderBlock user={user}/>
            <SidebarBlock user={user}/>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <TitleBlock title={title}/>
                            <Page user={user} />
                    </div>


                    {/*<FooterBlock />*/}
                </div>
            </div>

            <Modals />

            {/*<ToastContainer />

            <Loader />*/}
        </>
    )
};

export default DashboardLayout;
