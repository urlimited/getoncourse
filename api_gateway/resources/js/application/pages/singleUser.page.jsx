import React from 'react'
import TemplateBuilder from "bem-react-constructor/src/templateBuilder";

export const SingleUserPage = () => {

    const data=[
        {
            type:"pageContent",
            title: "Профайл",
            children: [
                {
                    type: "form",
                    col: 9,
                    sections: [
                        {
                            sectionLabel: 'Общая информация',
                            sectionItems: [
                                {
                                    inputType: 'text',
                                    label: 'Ваше имя',
                                    placeholder: 'Владимир Владимирович',
                                    initialValue: 'Value some'
                                },
                                /*{
                                    inputType: 'radio',
                                    label: 'Ваш аватар',
                                    placeholder: 'Владимир Владимирович',
                                    initialValue: 'Value some'
                                }*/
                            ]
                        },
                        {
                            sectionLabel: 'Контактная информация',
                            sectionItems: [
                                {
                                    inputType: 'text',
                                    label: 'Ваша почта',
                                    placeholder: 'master.adverse@gmail.com',
                                    initialValue: 'Value some'
                                },
                                {
                                    inputType: 'text',
                                    label: 'Ваш телефон',
                                    placeholder: '+7 777 155 70 27',
                                    initialValue: 'Value some'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'button',
                    title: 'Stats',
                    col: 3
                }
            ]
        }
    ]



    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
