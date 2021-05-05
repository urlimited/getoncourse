import React, {useEffect} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {MRouter} from "../../core/mrouter/MRouter";
import {ROUTE_TO_COURSES_PAGE_NAME, ROUTE_TO_USERS_LIST_PAGE_NAME} from "../routes";


export const PanelLayout = ({Page, getUser, user}) => {
    useEffect(() => {
        getUser().then(e => console.log(e))
    }, []);

    const router = MRouter.initRouter();

    const data = [
        {
            type: "header"
        },
        {
            type: "sidebar",
            menuContent: [
                {
                    title: "Основное",
                    items: [
                        {
                            itemTitle: "Пользователи",
                            itemRoute: router.getRoute(ROUTE_TO_USERS_LIST_PAGE_NAME),
                            isAccessible: /*user.isClient() || user.isStaff()*/false
                        }
                    ]

                },
                {
                    title: "Курсы",
                    items: [
                        {
                            itemTitle: "Курсы",
                            itemRoute: router.getRoute(ROUTE_TO_COURSES_PAGE_NAME),
                            isAccessible: user.isAdmin() || user.isClient() || user.isStaff()
                        },
                    ]

                }
            ]
        },
        {
            type: "reactWrapper",
            content: <Page/>
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
