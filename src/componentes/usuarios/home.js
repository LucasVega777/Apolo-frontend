import { GET_ALL_USERS } from "../../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from "react";

export default function Usuario() {
    const { data, loading, error } = useQuery(GET_ALL_USERS)
    const [users, setUsers] = useState([])

    if (data?.allUsers?.nodes && users.length === 0) {
        setUsers(data.allUsers.nodes);
    }
    

    if(loading) return <p>Cargando listado de usuarios...</p>
    if(error) return <p>Error: {error.message}</p>

    console.log('Usuarios', users);

    return (
        <>
            <h1> Listado de usuarios </h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th></th>
                        <th>Nombre</th>
                        <th></th>
                        {/* <th>Permisos</th>
                        <th></th> */}
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usuario) =>{
                            return (<tr>
                                <td>{usuario.idUser}</td>
                                <td></td>
                                <td>{usuario.name}</td>
                                <td></td>
                                {/* <td>{usuario.rulesPermissionsFormsByIdUser}</td>
                                <td></td> */}
                                <td>
                                    <button
                                        className={'btn btn-primary'} 
                                    >
                                        Editar
                                    </button>
                                    </td>
                                    <td></td><td></td><td></td>
                                    <td>
                                        <button
                                            className={'btn btn-primary'} 
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                    <td></td><td></td><td></td>
                                    <td>
                                        <button
                                            className={'btn btn-primary'} 
                                        >
                                            Ver
                                        </button>
                                    </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}