import React, {useEffect} from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder.js";


export const PanelLayout = ({Page}) => {

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
                                itemRoute: "/courses2"
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
