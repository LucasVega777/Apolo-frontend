import { GET_ALL_PERMISOSS } from "../../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import { ELIMINAR_PERMISO } from "../../graphql/mutaciones";
import { Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import Tabla from "./Tabla";
import PermisoForm from "./PermisoForm";

export default function TablaPermiso() {

    const { data, loading, error } = useQuery(GET_ALL_PERMISOSS)
    const [deletePermiso] = useMutation(ELIMINAR_PERMISO);
    const [formulario, setFormulario] = useState({
        mode: "create",
    });

    const [columnas, setColumnas] = useState( [
        {
            Header: "Identificador",
            accessor: "idPermiso",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Nombre",
            accessor: "descripcion",
            Cell: ({ value }) => <strong>{value}</strong>
        }
    ])

    const [permisos, setPermisos] = useState([])

    if (data?.allPermissions?.nodes && permisos.length === 0) {
        setPermisos(data.allPermissions.nodes);
    }
    
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    /**
     * Metodo para manejar la edicion de un proyecto
     * @param {*} idProyecto
     */
    const handleEdit = (datosPermisos) => {
        console.log( "Datos: ", datosPermisos);
        setFormulario({
            mode: "edit",
            idPermiso: datosPermisos.idPermiso,
            descripcion: datosPermisos.descripcion
        });
    };


    /**
     * Metodo para eliminar un permiso de la tabla
     * @param {*} idPermiso
    */
    const handleDelete = (idPermiso) => {
        // Eliminar el proyecto del state
        console.log(idPermiso);
        const newPermisos = permisos.filter(
            (permiso) => permiso.idPermiso !== idPermiso
        );
        // Eliminar el proyecto de la base de datos
        deletePermiso({
            variables: {
                input: {
                    idPermiso: idPermiso,
                },
            },
        });

        setPermisos(newPermisos);
    };

    if(data) {
        return (
            <>
                <h4>Listado de permisos</h4>
                <Tabla columnas={columnas} data={permisos} onEdit={handleEdit} onDelete={handleDelete}/>
                <h4>Crear/Editar Permiso</h4>
                {
                    formulario.mode === "create" ?
                        (<PermisoForm mode={formulario.mode}/>)
                    : (
                        <PermisoForm mode={formulario.mode}
                            idPermiso={formulario.idPermiso}
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