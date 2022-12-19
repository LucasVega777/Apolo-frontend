import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROYECTOS } from "../../graphql/querys";
import { DetalleProyecto } from "../gestion/detalle";
import { UserStoryForm } from "./userStories";

export const GestionProyectos = () => {
    const [idProyecto, setIdProyecto] = useState(1);
    const [idBacklog, setIdBacklog] = useState(null);

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
        <>
            <div>
                <h1>Gestion de proyectos</h1>
                <select
                    value={idProyecto}
                    onChange={(e) => {
                        setIdProyecto(+e.target.value);
                    }}
                >
                    {proyectos}
                </select>
                <DetalleProyecto idProyecto={idProyecto} />
            </div>
            <div>
                <h2>Gestion de US</h2>
                <select
                    value={idProyecto}
                    onChange={(e) => {
                        setIdProyecto(+e.target.value);
                        console.log(`idProyecto: ${idProyecto}`);
                        //set idBacklog if the project is selected content a backlog
                        data.allProjects.nodes.map((proyecto) => {
                            if (proyecto.idProyecto === idProyecto) {
                                //if exist a backlog in nodes
                                if (proyecto.backlogsByFkProyecto.nodes[0]) {
                                    setIdBacklog(
                                        proyecto.backlogsByFkProyecto.nodes[0]
                                            .idBacklog
                                    );
                                    console.log(`idBacklog: ${idBacklog}`);
                                }
                            }
                        });
                    }}
                >
                    {proyectos}
                </select>
                <UserStoryForm idBacklog={idBacklog} />
            </div>
        </>
    );
};
