import React from "react";

export default function Elemento({ proyecto, controlador }) {
    console.log(proyecto);
    const { id, nombre, descripcion, fechaInicio, fechaFin } = proyecto;
    const eliminar = () => {
        console.log("Click en el elemento" + id);
        controlador.eliminarElemento(proyecto.id);
    };

    const editar = () => {
        console.log("Click en el elemento" + id);
        controlador.editarElemento(proyecto.id);
    };

    return (
        <li>
            <p>Nombre: {nombre}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Fecha de inicio: {fechaInicio}</p>
            <p>Fecha de fin: {fechaFin}</p>
            <button onClick={eliminar}>Eliminar</button>
            <button onClick={editar}>Editar</button>
        </li>
    );
}