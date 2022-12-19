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
                <td></td>
                <td>{this.state.descripcion}</td>
                <td></td>
                <td>{fechaInicio.toDateString()}</td>
                <td></td>
                <td>{fechaFin.toDateString()}</td>
                <td></td>
                <td>
                    <button
                        onClick={() => this.props.onEdit(this.state)}
                        className={'btn btn-primary'} 
                    >
                        Editar
                    </button>
                </td>
                <td></td><td></td><td></td>
                <td>
                    <button
                        onClick={() =>
                            this.props.onDelete(this.state.idProyecto)
                        }
                        className={'btn btn-primary'} 
                    >
                        Eliminar
                    </button>
                </td>
                <td></td><td></td><td></td>
                <td>
                    <button
                        onClick={() => this.props.onVer(this.state.idProyecto)}
                        className={'btn btn-primary'} 
                    >
                        Ver
                    </button>
                </td>
            </>
        );
    }
}

export default Proyecto;
