import React from "react";
import { useForm } from "react-hook-form";

// Usa formik para crear un formulario
export default function Formulario({ controlador }) {
    const modo = 'crear';

    // Formulario con los campos de un proyecto
    const { register, handleSubmit, errors } = useForm();
    const placeholder = {
        nombre: "Nombre del proyecto",
        descripcion: "Descripcion del proyecto",
        fechaInicio: "Formato: 23/12/2020",
        fechaFin: "Formato: 24/11/2021",
    };

    const onSubmit = (data) => {
        console.log(data);
        controlador.crearElemento(data);
    }

    return (
        <h3>Formulario</h3>
    );
}
