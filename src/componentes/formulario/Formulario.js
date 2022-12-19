import { GET_ALL_FORMS } from "../../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import { ELIMINAR_FORMULARIO } from "../../graphql/mutaciones";
import { Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import Tabla from "./Tabla";
import Form from "./TablaForm"; 


export default function TablaForm() {

    const { data, loading, error } = useQuery(GET_ALL_FORMS)
    const [deleteForm] = useMutation(ELIMINAR_FORMULARIO);
    const [formulario, setFormulario] = useState({
        mode: "create",
    });

    const [columnas, setColumnas] = useState( [
        {
            Header: "Identificador",
            accessor: "idFormulario",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Nombre",
            accessor: "nombre",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Detalle",
            accessor: "detalle",
            Cell: ({ value }) => <strong>{value}</strong>
        }
    ])

    const [forms, setForms] = useState([])

    if (data?.allForms?.nodes && forms.length === 0) {
        setForms(data.allForms.nodes);
    }
    
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    /**
     * Metodo para manejar la edicion de un proyecto
     * @param {*} idProyecto
     */
    const handleEdit = (datosForm) => {
        console.log( "Datos: ", datosForm);
        setFormulario({
            mode: "edit",
            idFormulario: datosForm.idFormulario,
            nombre: datosForm.nombre,
            detalle: datosForm.detalle
        });
    };


    /**
     * Metodo para eliminar un proyecto de la tabla
     * @param {*} idForm
    */
    const handleDelete = (idFormulario) => {
        // Eliminar el proyecto del state
        console.log(idFormulario);
        const newForms = forms.filter(
            (f) => f.idFormulario !== idFormulario
        );
        // Eliminar el proyecto de la base de datos
        deleteForm({
            variables: {
                input: {
                    idFormulario: idFormulario,
                },
            },
        });

        setForms(newForms);
    };

    if(data) {
        return (
            <>
                <h4>Listado de Formularios</h4>
                <Tabla columnas={columnas} data={forms} onEdit={handleEdit} onDelete={handleDelete}/>
                <h4>Crear/Editar Formulario</h4>
                {
                    formulario.mode === "create" ?
                        (<Form mode={formulario.mode}/>)
                    : (
                        <Form mode={formulario.mode}
                            idFormulario={formulario.idFormulario}
                            nombre={formulario.nombre}
                            detalle={formulario.detalle}
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