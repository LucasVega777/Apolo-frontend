import { GET_ROLES_PERMISOS } from "../../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import { ELIMINAR_ROL_PERMISO } from "../../graphql/mutaciones";
import { Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import Tabla from "./TablaRolesPermisos";
import FormRolPermiso from "./FormRolPermiso";

export default function TablaRolPermiso() {

    const { data, loading, error } = useQuery(GET_ROLES_PERMISOS)
    const [deleteRol] = useMutation(ELIMINAR_ROL_PERMISO);
    const [formulario, setFormulario] = useState({
        mode: "create",
    });

    const [columnas, setColumnas] = useState( [
        {
            Header: "Identificador",
            accessor: "idRolPermiso",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Rol",
            accessor: "rol",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Permiso",
            accessor: "permiso",
            Cell: ({ value }) => <strong>{value}</strong>
        }
    ])

    const [allRulesPermissions, setRolesPermisos] = useState([])

    if (data?.allRulesPermissions?.nodes && allRulesPermissions.length === 0) {
        setRolesPermisos(data.allRulesPermissions.nodes);
    }
    
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    /**
     * Metodo para manejar la edicion de un proyecto
     * @param {*} idProyecto
     */
    const handleEdit = (datosRolPermiso) => {
        console.log( "Datos: ", datosRolPermiso);
        setFormulario({
            mode: "edit",
            idRolPermiso: datosRolPermiso.idRolPermiso,
            rol: datosRolPermiso.descripcion,
            permiso: datosRolPermiso.descripcion
        });
    };


    /**
     * Metodo para eliminar un proyecto de la tabla
     * @param {*} idRolPermiso
    */
    const handleDelete = (idRolPermiso) => {
        // Eliminar el proyecto del state
        console.log(idRolPermiso);
        const newRolesPermisos = allRulesPermissions.filter(
            (rol) => rol.idRolPermiso !== idRolPermiso
        );
        // Eliminar el proyecto de la base de datos
        deleteRol({
            variables: {
                input: {
                    idRolPermiso: +idRolPermiso,
                },
            },
        });

        setRolesPermisos(newRolesPermisos);
    };


    console.log("Formulario: ", formulario)

    if(data) {
        return (
            <>
                <h4>Listado de roles y permisos</h4>
                <Tabla columnas={columnas} data={allRulesPermissions} onEdit={handleEdit} onDelete={handleDelete}/>
                <h4>Crear/Editar Rol-Permiso</h4>
                {
                    formulario.mode === "create" ?
                        (<FormRolPermiso mode={formulario.mode}/>)
                    : (
                        <FormRolPermiso mode={formulario.mode}
                            idRolPermiso={formulario.idRolPermiso}
                            idRol={formulario.idRol}
                            idPermiso={formulario.idPermiso}
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