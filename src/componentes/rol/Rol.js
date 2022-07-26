import { GET_ALL_ROLES } from "../../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import { ELIMINAR_ROL } from "../../graphql/mutaciones";
import { Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import Tabla from "./Tabla";
import RolForm from "./RolForm";

export default function TablaRol() {

    const { data, loading, error } = useQuery(GET_ALL_ROLES)
    const [deleteRol] = useMutation(ELIMINAR_ROL);
    const [formulario, setFormulario] = useState({
        mode: "create",
    });

    const [columnas, setColumnas] = useState( [
        {
            Header: "Identificador",
            accessor: "idRol",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Nombre",
            accessor: "descripcion",
            Cell: ({ value }) => <strong>{value}</strong>
        }
    ])

    const [roles, setRoles] = useState([])

    if (data?.allRules?.nodes && roles.length === 0) {
        setRoles(data.allRules.nodes);
    }
    
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    /**
     * Metodo para manejar la edicion de un proyecto
     * @param {*} idProyecto
     */
    const handleEdit = (datosRol) => {
        console.log( "Datos: ", datosRol);
        setFormulario({
            mode: "edit",
            idRol: datosRol.idRol,
            descripcion: datosRol.descripcion
        });
    };


    /**
     * Metodo para eliminar un proyecto de la tabla
     * @param {*} idRol
    */
    const handleDelete = (idRol) => {
        // Eliminar el proyecto del state
        console.log(idRol);
        const newRoles = roles.filter(
            (rol) => rol.idRol !== idRol
        );
        // Eliminar el proyecto de la base de datos
        deleteRol({
            variables: {
                input: {
                    idRol: idRol,
                },
            },
        });

        setRoles(newRoles);
    };

    if(data) {
        return (
            <>
                <h4>Listado de roles</h4>
                <Tabla columnas={columnas} data={roles} onEdit={handleEdit} onDelete={handleDelete}/>
                <h4>Crear/Editar Rol</h4>
                {
                    formulario.mode === "create" ?
                        (<RolForm mode={formulario.mode}/>)
                    : (
                        <RolForm mode={formulario.mode}
                            idRol={formulario.idRol}
                            descripcion={formulario.descripcion}
                        />
                    )
                }
            </>
        )
    }
    else {
        return (
            <div>HOLA</div>
        )
    }

}