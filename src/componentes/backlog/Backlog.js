import { GET_ALL_BACKLOGS } from "../../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_BACKLOG } from "../../graphql/mutaciones";
import { Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import Tabla from "./TablaBacklog";
import BacklogForm from "./BacklogForm";

export default function TablaRol() {

    const { data, loading, error } = useQuery(GET_ALL_BACKLOGS)
    const [deleteBacklog] = useMutation(DELETE_BACKLOG);
    const [formulario, setFormulario] = useState({
        mode: "create",
    });

    const [columnas, setColumnas] = useState( [
        {
            Header: "Identificador",
            accessor: "idBacklog",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Proyecto",
            accessor: "nombreProyecto",
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
        }
    ])

    const [backlogs, setBacklog] = useState([])

    if (data?.allBacklogs?.nodes && backlogs.length === 0) {
        setBacklog(data.allBacklogs.nodes);
    }
    
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    /**
     * Metodo para manejar la edicion de un proyecto
     * @param {*} idProyecto
     */
    const handleEdit = (datosBacklog) => {
        console.log( "Datos: ", datosBacklog);
        setFormulario({
            mode: "edit",
            idBacklog: +datosBacklog.idBacklog,
            nombreProyecto: datosBacklog.nombreProyecto,
            fechaInicio: datosBacklog.fechaInicio,
            fechaFin: datosBacklog.fechaFin,
            descripcion: datosBacklog.descripcion,
            idProyecto: +datosBacklog.idProyecto
        });
    };


    /**
     * Metodo para eliminar un proyecto de la tabla
     * @param {*} idBacklog
    */
    const handleDelete = (idBacklog) => {
        // Eliminar el proyecto del state
        console.log(idBacklog);
        const newBacklogs = backlogs.filter(
            (b) => b.idBacklog !== idBacklog
        );
        // Eliminar el proyecto de la base de datos
        deleteBacklog({
            variables: {
                input: {
                    idBacklog: +idBacklog,
                },
            },
        });

        setBacklog(newBacklogs);
    };

    if(data) {
        return (
            <>
                <h4>Listado de backlogs</h4>
                <Tabla columnas={columnas} data={backlogs} onEdit={handleEdit} onDelete={handleDelete}/>
                <h4>Crear/Editar Backlogs</h4>
                {
                    formulario.mode === "create" ?
                        (<BacklogForm mode={formulario.mode}/>)
                    : (
                        <BacklogForm mode={formulario.mode}
                            idBacklog={formulario.idBacklog}
                            descripcion={formulario.descripcion}
                            idProyecto={formulario.idProyecto}
                            nombreProyecto={formulario.nombreProyecto}
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