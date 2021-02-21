import React, {useEffect} from "react";
import HeaderBlock from "../containers/blocks/header.container";
import SidebarBlock from "../containers/blocks/sidebar.container";
import FooterBlock from "../containers/blocks/footer.container";
import BreadcrumbsBlock from "../containers/blocks/breadcrumbs.container";
import TitleBlock from "../containers/blocks/title.container";
import {useLocation} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../containers/components/loader.container";

const DashboardLayout = ({getUser, breadcrumbs, user, Page, Modals}) => {
    const location = useLocation();

    useEffect(() => {
        getUser();
        //setPageBreadcrumbs();
    }, []);

    return (
        <>
            <HeaderBlock user={user} />

            <div className="page-content">

                <SidebarBlock user={user} />

                <div className="content-wrapper">

                    <div className="page-header page-header-light">

                        <TitleBlock />
                        <BreadcrumbsBlock breadcrumbs={breadcrumbs} />
                    </div>

                    <div className="content">
                        <Page user={user} />
                    </div>

                    <FooterBlock />
                </div>
            </div>
            <ToastContainer />
            <Modals />
            <Loader />
        </>
    )
};

export default DashboardLayout;