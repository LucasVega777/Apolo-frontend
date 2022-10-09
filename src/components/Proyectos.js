import React, { useState, useEffect } from "react";
import ProyectosDT from "./datatables/ProyectosDT";
import FormularioInsertProyecto from "./Forms/Proyecto/FormInsertProyecto";

function Proyectos({ logout }) {
    const [estado, setEstado] = useState(true);
    const doLogout = () => {
        setEstado(true);
        logout();
    };

    useEffect(() => {}, [estado]);

    return (
        <div className={"limiter"}>
            <h1> ABM de Proyectos </h1>
            <div><ProyectosDT></ProyectosDT></div>
            <div><FormularioInsertProyecto></FormularioInsertProyecto></div>
        </div>
    )
}

export default Proyectos;
