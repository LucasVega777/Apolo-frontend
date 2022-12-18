import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROYECTO_DETALLE } from "../../graphql/querys";

/**
 * Renderiza el detalle de un proyecto segun su ID
 * @param {*} props 
 * @returns 
 */
const DetalleProyecto = (props) => {
    const { loading, error, data } = useQuery(GET_PROYECTO_DETALLE, {
        variables: { idProyecto: props.idProyecto },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);
    return data.projectByIdProyecto !== null ? (
        <>
            <p>Proyecto: {data.projectByIdProyecto.descripcion}</p>
            <p>
                Backlogs:{" "}
                {data.projectByIdProyecto.backlogsByIdProyecto.totalCount}
            </p>
            <p>
                Total US:{" "}
                {data.projectByIdProyecto.backlogsByIdProyecto.totalCount > 0
                    ? data.projectByIdProyecto.backlogsByIdProyecto.nodes[0]
                          .usersStoriesByIdBacklog.totalCount
                    : 0}
            </p>
            <p>
                Usuarios:{" "}
                {data.projectByIdProyecto.usersProjectsByIdProyecto.totalCount}
            </p>
        </>
    ) : (
        <p>No hay datos</p>
    );
};

export default DetalleProyecto;
