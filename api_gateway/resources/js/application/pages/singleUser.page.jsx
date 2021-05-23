import React, {useEffect, useState} from 'react'
import TemplateBuilder from "bem-react-constructor/src/templateBuilder";
import {
    ROUTE_TO_PROFILE_PAGE_NAME,
    ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME,
    ROUTE_TO_USERS_EDIT_USER_PAGE_NAME
} from "../routes";
import {USER_TYPE_NOT_LOADED, UserFactory} from "../models/user.model";
import {useParams} from "react-router-dom";
import {MRouter} from "../../core/mrouter/MRouter";

export const SingleUserPage = ({updateUser, createUser, editorUser, getUser, currentRoute}) => {
    const router = MRouter.initRouter();

    const [data, setData] = useState([]);

    const [editableUser, setEditableUser] = useState(editorUser);

    const {userId} = useParams();

    useEffect(() => {
        console.log(currentRoute);

        if (currentRoute === ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME)
            setEditableUser(UserFactory.createUser(USER_TYPE_NOT_LOADED, {}));

        if (currentRoute === ROUTE_TO_USERS_EDIT_USER_PAGE_NAME)
            getUser(userId).then(r => {
                console.log(r.message);
                setEditableUser(UserFactory.createUser(USER_TYPE_NOT_LOADED, {}));
            });

        if (currentRoute === ROUTE_TO_PROFILE_PAGE_NAME)
            setEditableUser(editorUser);
    }, [editorUser]);

    useEffect(() => {
        const preProcessData = [
            {
                type: "pageContent",
                title: {
                    [ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME]: 'Создание нового пользователя',
                    [ROUTE_TO_USERS_EDIT_USER_PAGE_NAME]: 'Редактирование пользователя',
                    [ROUTE_TO_PROFILE_PAGE_NAME]: 'Редактирование профиля'
                }[currentRoute],
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
                                        initialValue: editableUser.name,
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
                                        initialValue: editableUser.avatar,
                                    },
                                    {
                                        name: 'id',
                                        initialValue: editableUser.id,
                                        inputType: 'hidden'
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
                                        initialValue: editableUser.email,
                                        name: 'email',
                                        rules: [
                                            {
                                                rule: 'email'
                                            }
                                        ]
                                    },
                                    {
                                        inputType: 'text',
                                        label: 'Ваш телефон',
                                        placeholder: '+7 777 155 70 27',
                                        initialValue: editableUser.phone,
                                        name: 'phone',
                                        rules: [
                                            {
                                                rule: 'phone'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        saveHandler: (data) => {
                            if (currentRoute === ROUTE_TO_PROFILE_PAGE_NAME)
                                updateUser(data);

                            if (currentRoute === ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME)
                                createUser(data);

                            if (currentRoute === ROUTE_TO_USERS_EDIT_USER_PAGE_NAME)
                                updateUser(data);
                        }
                    },
                    {
                        type: 'button',
                        title: 'Stats',
                        col: 3
                    }
                ]
            }
        ];

        if (editorUser?.isAdmin() ?? false)
            preProcessData[0].children[0].sections.unshift({
                sectionLabel: 'Системная информация',
                sectionItems: [
                    {
                        inputType: 'radio',
                        cases: [
                            {
                                caseType: 'image',
                                content: '/images/avatars/018-man.png',
                                value: '1'
                            },
                            {
                                caseType: 'image',
                                content: '/images/avatars/019-man.png',
                                value: '2'
                            },
                            {
                                caseType: 'image',
                                content: '/images/avatars/020-man.png',
                                value: '3'
                            }

                        ],
                        name: 'role',
                        label: 'Системная роль',
                        initialValue: editableUser.avatar,
                    },
                    {
                        inputType: 'text',
                        label: 'Ваш пароль',
                        placeholder: 'MySecretPassword123',
                        name: 'password'
                    },
                ]
            });

        setData(preProcessData);
    }, [editableUser]);

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
