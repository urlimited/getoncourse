import React, {useEffect} from "react";
import history from "../../../core/services/history";
import ReportsTableComponent from "../containers/components/reportsTable.container";

const DashboardPage = ({getUser, user}) => {

    return (
        <>
            {user.isClient()
                ? <ReportsTableComponent user={user}/>
                : <></>
            }

        </>
    )
};

export default DashboardPage;