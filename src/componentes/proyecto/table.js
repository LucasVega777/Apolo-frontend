//Componente: elemento de la tabla de proyectos
// Contiene los datos de un proyecto
// Contiene los botones para editar, eliminar y ver el detalle de un proyecto

import React from "react";

class Proyecto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idProyecto: props.idProyecto,
            descripcion: props.descripcion,
            fechaInicio: props.fechaInicio,
            fechaFin: props.fechaFin,
        };
    }

    render() {
        // Cambiar de timestamp a date las fechas
        const fechaInicio = new Date(this.state.fechaInicio);
        const fechaFin = new Date(this.state.fechaFin);
        return (
            <>
                <td>{this.state.idProyecto}</td>
                <td>{this.state.descripcion}</td>
                <td>{fechaInicio.toDateString()}</td>
                <td>{fechaFin.toDateString()}</td>
                <td>
                    <button>Editar</button>
                </td>
                <td>
                    <button onClick={
                        () => this.props.onDelete(this.state.idProyecto)
                    } >Eliminar</button>
                </td>
                <td>
                    <button>Ver</button>
                </td>
            </>
        );
    }
}

export default Proyecto;