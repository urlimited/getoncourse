import React, {useEffect, useState} from 'react'
import TemplateBuilder from "bem-react-constructor/src/templateBuilder";
import history from "../../core/services/history";
import {ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME, ROUTE_TO_USERS_EDIT_USER_PAGE_NAME} from "../routes";
import {MRouter} from "../../core/mrouter/MRouter";
import {
    EMPTY_TEXT_PHONE,
    USER_TYPE_ADMIN,
    USER_TYPE_CLIENT,
    USER_TYPE_NOT_LOADED,
    USER_TYPE_STAFF
} from "../models/user.model";
import {Link} from "react-router-dom";

export const UsersPage = ({getUsers, accountUser}) => {
    const router = MRouter.initRouter();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(r => {
            setUsers(r.message)
        });
    }, []);

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
            sortable: true,
            sortFunction: (rowA, rowB) => rowA.avatar.localeCompare(rowB.avatar),
            width: '70px'
        },
        {
            name: 'Пользователь',
            selector: row => row.processedName,
            sortable: true,
            sortFunction: (rowA, rowB) => rowA.email.localeCompare(rowB.email)
        },
        {
            name: 'Контакты',
            selector: row => row.processedEmail,
            sortable: true,
            sortFunction: (rowA, rowB) => rowA.permissions.localeCompare(rowB.permissions)
        },
        {
            name: '',
            right: true,
            selector: row => row.processedActions,
            width: '100px'
        },
    ];

    const data = [
        {
            type: "pageContent",
            title: "Список пользователей",
            children: [
                {
                    type: "dataTable",
                    title: 'Пользователи',
                    col: 9,
                    columns: columns,
                    data: users.map(u => ({
                        ...u,
                        processedName: <div className="users-list__row">
                            <div className="users-list__avatar-col">
                                <div className={"users-list__avatar-wrapper border-2 " + {
                                    [USER_TYPE_ADMIN]: "border-danger",
                                    [USER_TYPE_STAFF]: "border-primary",
                                    [USER_TYPE_CLIENT]: "border-default",
                                    [USER_TYPE_NOT_LOADED]: ""
                                }[u.role]}>
                                    <img className="users-list__avatar-image"
                                         src={"/images/avatars/00" + u.avatar + "-man.png"} alt=""/>
                                </div>
                            </div>
                            <div className="users-list__naming-col">
                                <p className="users-list__name-text">{u.getName()}</p>
                                <p className="users-list__role-text">{u.getRole()}</p>
                            </div>
                        </div>,
                        processedEmail: <div>
                            <p className="users-list__email-text">{u.getEmail()}</p>
                            <p className={"users-list__email-phone " + (u.getPhone() === EMPTY_TEXT_PHONE
                                ? "text-empty"
                                : "")}>{u.getPhone() ?? "1"}</p>
                        </div>,
                        processedActions: <div className="users-list__row">
                            {/*{accountUser.isAdmin()
                                ? <Link to={router.getRoute(ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME)}>
                                    <i className="bx bx-lock"/>
                                </Link>
                                : <></>
                            }

                            {accountUser.isAdmin()
                                ? <Link to={router.getRoute(ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME)}>
                                    <i className="bx bx-log-in"/>
                                </Link>
                                : <></>
                            }*/}

                            {accountUser.isAdmin()
                                ? <Link to={router.getRoute(ROUTE_TO_USERS_EDIT_USER_PAGE_NAME, {userId: u.id})}>
                                    <i className="bx bx-pencil"/>
                                </Link>
                                : <></>
                            }
                        </div>
                    })),
                    createButton: {
                        type: "button",
                        title: "Зарегистрировать пользователя",
                        clickHandler: () => {
                            history.push(router.getRoute(ROUTE_TO_USERS_CREATE_NEW_PAGE_NAME));
                        },
                        classes: ['btn-primary', 'btn-sm']
                    },
                },
                {
                    type: 'button',
                    title: 'Stats',
                    col: 3,
                }
            ]
        }
    ]


    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
