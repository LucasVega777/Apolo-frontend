import React, { useState } from "react";
import Proyecto from "./table";
import ProyectoForm from "./form";
import DetalleProyecto from "./detalle";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_PROYECTOS } from "../../graphql/querys";
import { ELIMINAR_PROYECTO } from "../../graphql/mutaciones";

// Listar los proyectos en una tabla
// Crear un boton para crear un nuevo proyecto
// Crear un boton para editar un proyecto
// Crear un boton para eliminar un proyecto
// Crear un boton para ver el detalle de un proyecto

function Proyectos(props) {
    /**
     * Query para obtener todos los proyectos
     */
    const { loading, error, data } = useQuery(GET_ALL_PROYECTOS);
    const [deleteProyecto] = useMutation(ELIMINAR_PROYECTO);
    const [proyectos, setProyectos] = useState([]);
    const [detalle, setDetalle] = useState(false);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data.allProjects.nodes && proyectos.length === 0)
        setProyectos(data.allProjects.nodes);

    /**
     * Metodo para mostrar el detalle de un proyecto
     * @param {*} idProyecto
     */
    const handleDetalle = (idProyecto) => {
        setDetalle({
            idProyecto: idProyecto,
        });
    };

    /**
     * Metodo para eliminar un proyecto de la tabla
     * @param {*} idProyecto
     */
    const handleDelete = (idProyecto) => {
        // Eliminar el proyecto del state
        console.log(idProyecto);
        const newProyectos = proyectos.filter(
            (proyecto) => proyecto.idProyecto !== idProyecto
        );
        // Eliminar el proyecto de la base de datos
        deleteProyecto({
            variables: {
                input: {
                    idProyecto: idProyecto,
                },
            },
        });
        setProyectos(newProyectos);
    };

    return (
        <>
            <h1>Proyectos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                    </tr>
                </thead>
                <tbody>
                    {proyectos.map((proyecto) => (
                        <tr>
                            <Proyecto
                                idProyecto={proyecto.idProyecto}
                                descripcion={proyecto.descripcion}
                                fechaInicio={proyecto.fechaInicio}
                                fechaFin={proyecto.fechaFin}
                                onDelete={handleDelete}
                                onVer={handleDetalle}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2> Detalle</h2>
            {detalle ? (
                <DetalleProyecto idProyecto={detalle.idProyecto} />
            ) : null}
            <h2> Crear/Editar proyecto</h2>
            <ProyectoForm />
        </>
    );
}

export default Proyectos;
