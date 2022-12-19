import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROYECTOS } from "../../graphql/querys";
import { DetalleProyecto } from "../gestion/detalle";

export const GestionProyectos = () => {
    const [idProyecto, setIdProyecto] = useState(1);

    // View all projects in list format
    const { loading, error, data } = useQuery(GET_ALL_PROYECTOS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // Create a list of project in select format
    const proyectos = data.allProjects.nodes.map((proyecto) => (
        <option key={proyecto.idProyecto} value={proyecto.idProyecto}>
            {proyecto.descripcion}
        </option>
    ));

    // render the details of the project
    return (
        <div>
            <h1>Gestion de proyectos</h1>
            <select
                value={idProyecto}
                onChange={(e) => setIdProyecto(+e.target.value)}
            >
                {proyectos}
            </select>
            <DetalleProyecto idProyecto={idProyecto} />
        </div>
    );
};
