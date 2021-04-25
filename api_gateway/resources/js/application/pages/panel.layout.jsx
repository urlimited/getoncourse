import React, {useEffect} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";
import {MRouter} from "../../core/mrouter/MRouter";
import {ROUTE_TO_COURSES_PAGE_NAME} from "../routes";


export const PanelLayout = ({Page}) => {
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
                            itemTitle:"Рабочий стол",
                            itemRoute: "/dashboards"
                        },
                        {
                            itemTitle:"Другое",
                            itemRoute: "/other"
                        }
                    ]

                },
                {
                    title: "Курсы",
                    items:
                        [
                            {
                                itemTitle:"Курсы",
                               itemRoute: router.getRoute(ROUTE_TO_COURSES_PAGE_NAME)
                            },
                        ]

                }
            ]
        },
        {
            type: "reactWrapper",
            content: <Page />
        }
    ]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
