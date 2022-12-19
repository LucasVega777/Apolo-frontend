// Usando Formk creamos un formulario con validaciones
// para la creacion de nuevos proyectos

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_FORM } from "../../graphql/mutaciones";
import { useState } from "react";
import { EDITAR_FORM } from "../../graphql/mutaciones";

const Formulario = (props) => {
    const [crearForm, { data, loading, error }] =
        useMutation(CREATE_FORM);
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
    const [editarForm] = useMutation(EDITAR_FORM);

    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error}`;

    return (
        <>
            <Formik
                initialValues={{
                    detalle: "",
                    nombre: ""
                }}
                validate={(valores) => {

                    console.log(valores)
                    let errors = {}

                    // En caso de que la descripcion sea nula o un string 
                    // vacio muestra el mensaje.
                    if(!valores.detalle || "") {
                        errors.detalle = "Por favor. Ingresa un rol."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm, setSubmitting }) => {
                    if (props.mode === "create") {
                        const max = 1000
                        const min = 1
                        const identificador = Math.ceil(Math.random() * (max - min) + min)
                        crearForm({
                            variables: {
                                input: {
                                    form: {
                                        idFormulario: identificador,
                                        detalle: valores.detalle.toLocaleUpperCase(),
                                        nombre: valores.nombre.toLocaleUpperCase()
                                    }
                                }
                            }
                        })
    
                        console.log(data)
                        if(data) {
                            resetForm();
                            // Acá es donde hago la conexión a la api o sea, 
                            // insertar en BD.
                            console.log(valores)
                            console.log("OK")
                            cambiarFormularioEnviado(true)
                            setTimeout( () => cambiarFormularioEnviado(false), 1000)
                        }
                    }
                    else {
                        console.log(`Editando rol ${props.idFormulario}`);
                        editarForm({
                            variables: {
                                input: {
                                    formPatch: {
                                        nombre: valores.nombre,
                                        detalle: valores.detalle
                                    },
                                    idFormulario: props.idFormulario,
                                },
                            },
                        });
                    }
                    setSubmitting(false);
                }}
            >
                { ({
                    handleSubmit, values, handleChange, handleBlur, errors, touched, isSubmitting
                }) => (
                    <form className='formulario' onSubmit={handleSubmit}>
                        <p className='etiqueta'>Crear un nuevo rol</p>
                        <div>
                            <label 
                                htmlFor='nombre'
                            >
                                Nombre
                            </label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="Seguridad" 
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.nombre && errors.nombre && <div className='error'> {errors.nombre} </div>}
                            <label 
                                htmlFor='detalle'
                            >
                                Detalle
                            </label>
                            <input 
                                type="text" 
                                id="detalle" 
                                name="detalle" 
                                placeholder="Seguridad" 
                                value={values.detalle}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.detalle && errors.detalle && <div className='error'> {errors.detalle} </div>}
                        </div>
                        <button type="submit" disabled={isSubmitting}  className={'btn btn-primary'} >
                            {props.mode === "create" ? "Crear" : "Editar"}
                        </button>
                        {formularioEnviado && <p className='exito'>Creado con éxito.</p>}
                    </form>
                )} 
            </Formik>
        </>
    );
};

export default Formulario;