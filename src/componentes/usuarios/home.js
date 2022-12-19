import { GET_ALL_USERS } from "../../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import React, { useState, useEffect } from "react";
import { DELETE_USER } from "../../graphql/mutaciones";
import swal from 'sweetalert';
// import { useNavigate } from 'react-router-dom';
import FRMusuario from "./formulario"
import { async } from "q";

export default function Usuario() {
    const { data, loading, error } = useQuery(GET_ALL_USERS)
    const [users, setUsers] = useState([])

    const [view, setView] = useState()

    if (data?.allUsers?.nodes && users.length === 0) {
        setUsers(data.allUsers.nodes);
    }
    const [deleteUser, {}] = useMutation(DELETE_USER);

    const popup = async(datos) =>{
        await swal({title: 'Datos del Usuario:',
            text: `
            idUser: ${datos.idUser}\n
            nombre: ${datos.name}\n            
            `
        })
    }
    
    const editar = async(id)=> {
        await swal({title: 'Redireccion:',
            text: `Presiona ok y seras redirigido a la pestaña de edicion`
        })
        window.location = `/editar/usuarios/${id}`
    }

    const eliminar = async(id)=> {
        try {
            await deleteUser({
                variables: {
                    "input": {
                        "idUser": id
                      }
                  }
            })
            await swal({
                title: "Exito!",
                text: "Has eliminado el usuario correctamente",
                icon: "success",
            });
            window.location.reload(false);
        } catch (error){
            swal({
                title: "Error!",
                text: "Ocurrio un error inesperado",
                icon: "error",
              });
        }
    }

    if(loading) return <p>Cargando listado de usuarios...</p>
    if(error) return <p>Error: {error.message}</p>
    // const navigate = useNavigate();
    return (
        <>
        <section id={'hero'} className={'hero'}>
            <div className={'container'}>
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
                                
                                    <td>
                                        <button
                                            className={'btn btn-primary'}
                                            onClick={()=>{
                                                editar(usuario.idUser)
                                            }}
                                        >
                                            Editar
                                        </button>
                                        </td>
                                        <td></td><td></td><td></td>
                                        <td>
                                            <button
                                                className={'btn btn-primary'} 
                                                href='/usuarios'
                                                onClick={()=> {
                                                    eliminar(usuario.idUser)
                                                }}
                                                
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                        <td></td><td></td><td></td>
                                        <td>
                                            <button
                                                className={'btn btn-primary'} 
                                                onClick={()=> {
                                                    popup(usuario)
                                                }}
                                            >
                                                Ver
                                            </button>
                                        </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                </div>
            </section>
            <FRMusuario/>
        </>
    )
}





