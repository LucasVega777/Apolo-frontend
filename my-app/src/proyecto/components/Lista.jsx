//list of projects with the elements of list of projects
import React from 'react';
import Elemento from './Elemento.jsx';

export default function Lista({ proyectos, controlador }) {
    return (
        <ul>
            {proyectos.map((proyecto) => (
                <Elemento
                    key={proyecto.id}
                    proyecto={proyecto}
                    controlador={controlador}
                />
            ))}
        </ul>
    );
}