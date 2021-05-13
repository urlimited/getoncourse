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
                                    initialValue: 'Value some',
                                    name: 'name'
                                },
                                {
                                    inputType: 'radio',
                                    cases: [
                                        {
                                            caseType: 'image',
                                            content: '/images/avatars/001-man.png',
                                            value: '1'
                                        },
                                        {
                                            caseType: 'image',
                                            content: '/images/avatars/002-man.png',
                                            value: '2'
                                        },
                                        {
                                            caseType: 'image',
                                            content: '/images/avatars/003-man.png',
                                            value: '3'
                                        },
                                        {
                                            caseType: 'image',
                                            content: '/images/avatars/004-man.png',
                                            value: '4'
                                        },
                                        {
                                            caseType: 'image',
                                            content: '/images/avatars/005-man.png',
                                            value: '5'
                                        },
                                        {
                                            caseType: 'image',
                                            content: '/images/avatars/006-man.png',
                                            value: '6'
                                        },
                                        {
                                            caseType: 'image',
                                            content: '/images/avatars/007-man.png',
                                            value: '7'
                                        },
                                        {
                                            caseType: 'image',
                                            content: '/images/avatars/008-man.png',
                                            value: '8'
                                        },
                                        {
                                            caseType: 'image',
                                            content: '/images/avatars/009-man.png',
                                            value: '9'
                                        }

                                    ],
                                    name: 'avatar',
                                    label: 'Ваш аватар',
                                    initialValue: '1',
                                }
                            ]
                        },
                        {
                            sectionLabel: 'Контактная информация',
                            sectionItems: [
                                {
                                    inputType: 'text',
                                    label: 'Ваша почта',
                                    placeholder: 'master.adverse@gmail.com',
                                    initialValue: 'Value some',
                                    name: 'email'
                                },
                                {
                                    inputType: 'text',
                                    label: 'Ваш телефон',
                                    placeholder: '+7 777 155 70 27',
                                    initialValue: 'Value some',
                                    name: 'phone'
                                }
                            ]
                        }
                    ],
                    saveHandler: (data) => {
                        console.log(data);
                    }
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
