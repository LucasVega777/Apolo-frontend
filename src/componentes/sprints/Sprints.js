import { GET_ALL_SPRINTS } from "../../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_SPRINT } from "../../graphql/mutaciones";
import { Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import Tabla from "./TablaSprint";
import SprintForm from "./SprintForm";


export default function Sprints() {

    const { data, loading, error } = useQuery(GET_ALL_SPRINTS)
    const [deleteBacklog] = useMutation(DELETE_SPRINT);
    const [formulario, setFormulario] = useState({
        mode: "create",
    });

    const [columnas, setColumnas] = useState( [
        {
            Header: "Identificador",
            accessor: "idSprint",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Backlog",
            accessor: "nombreBacklog",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Fecha Inicio",
            accessor: "fechaInicio",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Fecha Fin",
            accessor: "fechaFin",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Descripcion",
            accessor: "descripcion",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Estado",
            accessor: "estado",
            Cell: ({ value }) => <strong>{value}</strong>
        }
    ])

    const [sprints, setSprints] = useState([])

    if (data?.allSprints?.nodes && sprints.length === 0) {
        setSprints(data.allSprints.nodes);
    }
    
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    /**
     * Metodo para manejar la edicion de un proyecto
     * @param {*} idSprint
     */
    const handleEdit = (datosSprints) => {
        console.log( "Datos: ", datosSprints);
        setFormulario({
            mode: "edit",
            idSprint: +datosSprints.idSprint,
            idBacklog: +datosSprints.idBacklog,
            nombreBacklog: datosSprints.nombreBacklog,
            fechaInicio: datosSprints.fechaInicio,
            fechaFin: datosSprints.fechaFin,
            descripcion: datosSprints.descripcion,
        });
    };


    /**
     * Metodo para eliminar un proyecto de la tabla
     * @param {*} idSprint
    */
    const handleDelete = (idSprint) => {
        // Eliminar el proyecto del state
        console.log(idSprint);
        const newBacklogs = sprints.filter(
            (b) => b.idSprint !== idSprint
        );
        // Eliminar el proyecto de la base de datos
        deleteBacklog({
            variables: {
                input: {
                    idSprint: +idSprint,
                },
            },
        });

        setSprints(newBacklogs);
    };

    if(data) {
        return (
            <>
                <h4>Listado de sprints</h4>
                <Tabla columnas={columnas} data={sprints} onEdit={handleEdit} onDelete={handleDelete}/>
                <h4>Crear/Editar sprints</h4>
                {
                    formulario.mode === "create" ?
                        (<SprintForm mode={formulario.mode}/>)
                    : (
                        <SprintForm mode={formulario.mode}
                            idSprint={formulario.idSprint}
                            idBacklog={formulario.idBacklog}
                            descripcion={formulario.descripcion}
                            nombreBacklog={formulario.nombreBacklog}
                            fechaInicio={formulario.fechaInicio}
                            fechaFin={formulario.fechaFin}
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