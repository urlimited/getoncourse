import React, {useEffect} from "react";

const DashboardPage = ({getUser, user}) => {
    return (
        <>
            <div className="row">
                <div className="col-xl-4">
                    <div className="overflow-hidden card">
                        <div className="bg-soft-primary">
                            <div className="row">
                                <div className="col-7">
                                    <div className="text-primary p-3"><h5 className="text-primary">Welcome Back !</h5>
                                        <p>Skote Dashboard</p></div>
                                </div>
                                <div className="align-self-end col-5"><img src="/static/media/profile-img.43b59e59.png"
                                                                           alt="" className="img-fluid"/></div>
                            </div>
                        </div>
                        <div className="pt-0 card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="avatar-md profile-user-wid mb-4"><img
                                        src="/static/media/avatar-1.3921191a.jpg" alt=""
                                        className="img-thumbnail rounded-circle"/></div>
                                    <h5 className="font-size-15 text-truncate">Henry Price</h5>
                                    <p className="text-muted mb-0 text-truncate">UI/UX Designer</p></div>
                                <div className="col-sm-8">
                                    <div className="pt-4">
                                        <div className="row">
                                            <div className="col-6"><h5 className="font-size-15">125</h5>
                                                <p className="text-muted mb-0">Projects</p></div>
                                            <div className="col-6"><h5 className="font-size-15">$1245</h5>
                                                <p className="text-muted mb-0">Revenue</p></div>
                                        </div>
                                        <div className="mt-4"><a
                                            className="btn btn-primary waves-effect waves-light btn-sm"
                                            href="/">View Profile <i
                                            className="mdi mdi-arrow-right ml-1"/></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DashboardPage;
