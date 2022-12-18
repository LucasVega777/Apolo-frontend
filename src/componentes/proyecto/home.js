import React, { useState } from "react";
import Proyecto from "./table";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROYECTOS } from "../../graphql/querys";

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
    const [proyectos, setProyectos] = useState([]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data.allProjects.nodes && proyectos.length === 0)
        setProyectos(data.allProjects.nodes);

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
        setProyectos(newProyectos);
    };

    return (
        <>
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
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Proyectos;
