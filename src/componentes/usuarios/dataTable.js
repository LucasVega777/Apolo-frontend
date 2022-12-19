import { GET_ALL_USERS } from "../../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component'

export default function DTusuario() {
    const { data, loading, error } = useQuery(GET_ALL_USERS)
    const [users, setUsers] = useState([])

    if (data?.allUsers?.nodes && users.length === 0) {
        setUsers(data.allUsers.nodes);
    }


    if(loading) return <p>Cargando listado de usuarios...</p>
    if(error) return <p>Error: {error.message}</p>

    console.log('Usuarios', users);
    const columnas = [
        {
            name: 'ID',
            selector:'idUser',
            sortable: true
        },
        {
            name: 'Nombre',
            selector:'name',
            sortable: true
        },
        {
            name: 'Password',
            selector:'password',
        },
        {
            name: '__typename',
            selector:'type',
        },
    ]

    const datos = [{__typename: 'User', name: 'Amelia Sanders', password: 'kotaku', idUser: 1},
    {__typename: 'User', name: 'Lois Perez', password: 'topgun', idUser: 2}, 
    {__typename: 'User', name: 'Jamie Wheeler', password: 'modelsne', idUser: 3}, 
    {__typename: 'User', name: 'Nevaeh Vargas', password: 'cheeks', idUser: 4}, 
    {__typename: 'User', name: 'lucas', password: 'lvega123', idUser: 5}]


    if(users.length > 0){
        return (
            <div>
                <DataTable>
                    colums = {columnas},
                    data = {datos},
                    title = {'Listado de Usuarios'}
                    
                </DataTable>
            
            </div>
        )
    } else {
        return (
            <div>
                <h1> No hay usuarios</h1>
            </div>
        )
    }
    
}