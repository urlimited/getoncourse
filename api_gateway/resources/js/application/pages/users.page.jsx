import React from 'react'
import TemplateBuilder from "bem-react-constructor/src/templateBuilder";

export const UsersPage = ()=>{
    const dataUsers = [
        {
            avatar: '1',
            email: 'test@test.com',
            permissions: "author",
            projects: 125
        }
    ]
    const columns = [
        {
            name: '#',
            selector: row => row.avatar,
            sortable: true,
            sortFunction: (rowA, rowB) => rowA.avatar.localeCompare(rowB.avatar)
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            sortFunction: (rowA, rowB) => rowA.email.localeCompare(rowB.email)
        },
        {
            name: 'Permissions',
            selector: row => row.permissions,
            sortable: true,
            sortFunction: (rowA, rowB) => rowA.permissions.localeCompare(rowB.permissions)
        },
        {
            name: 'Projects',
            selector: row => row.projects,
            sortable: true,
            sortFunction: (rowA, rowB) => rowA.projects.localeCompare(rowB.projects)
        },
        {
            name: 'Actions',
            right: true,
            selector: row => row.actions,
            width: '200px'
        },
    ];

    const data=[
        {
            type:"pageContent",
            title: "Список пользователей",
            children: [
                {
                    type: "dataTable",
                    col: 10,
                    columns: columns,
                    data: dataUsers
                }
            ]
        }
    ]



    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}
