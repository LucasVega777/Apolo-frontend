import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { GET_ALL_PROYECTOS } from "../../queries/Proyectos";

function ProyectosDT() {
    const { loading, error, data } = useQuery(GET_ALL_PROYECTOS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div class="user-data m-b-40">
            <div class="table-responsive table-data">
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>descripcion</th>
                            <th>fechaInicio</th>
                            <th>fechaFin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allProjects.nodes.map(
                            ({
                                idProyecto,
                                descripcion,
                                fechaInicio,
                                fechaFin,
                            }) => (
                                <tr key={idProyecto}>
                                    <td>{idProyecto}</td>
                                    <td>{descripcion}</td>
                                    <td>{fechaInicio}</td>
                                    <td>{fechaFin}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProyectosDT;
