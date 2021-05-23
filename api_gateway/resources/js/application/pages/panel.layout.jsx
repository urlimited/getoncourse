import React, {useEffect} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {MRouter} from "../../core/mrouter/MRouter";
import {ROUTE_TO_COURSES_PAGE_NAME, ROUTE_TO_USERS_LIST_PAGE_NAME} from "../routes";


export const PanelLayout = ({Page, getUser, user, currentRoute}) => {
    useEffect(() => {
        getUser();
    }, []);

    const router = MRouter.initRouter();

    const data = [
        {
            type: "header",
            user: user
        },
        {
            type: "sidebar",
            menuContent: [
                {
                    title: "Управление системой",
                    items: [
                        {
                            itemTitle: "Пользователи",
                            itemRoute: router.getRoute(ROUTE_TO_USERS_LIST_PAGE_NAME),
                            isAccessible: user.isAdmin()
                        }
                    ],
                    isAccessible: user.isAdmin()

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
            content: <Page currentRoute={currentRoute} />
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
