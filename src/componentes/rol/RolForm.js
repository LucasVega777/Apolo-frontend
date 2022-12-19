// Usando Formk creamos un formulario con validaciones
// para la creacion de nuevos proyectos

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { CREAR_ROL } from "../../graphql/mutaciones";
import { useState } from "react";
import { EDITAR_ROL } from "../../graphql/mutaciones";

const RolForm = (props) => {
    const [crearRol, { data, loading, error }] =
        useMutation(CREAR_ROL);
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
    const [editarRol] = useMutation(EDITAR_ROL);

    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error}`;

    return (
        <>
            <Formik
                initialValues={{
                    idRol: "",
                    descripcion: ""
                }}
                validate={(valores) => {

                    console.log(valores)
                    let errors = {}

                    // En caso de que la descripcion sea nula o un string 
                    // vacio muestra el mensaje.
                    if(!valores.descripcion || "") {
                        errors.descripcion = "Por favor. Ingresa un rol."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm, setSubmitting }) => {
                    if (props.mode === "create") {
                        const max = 1000
                        const min = 1
                        const identificador = Math.ceil(Math.random() * (max - min) + min)
                        crearRol({
                            variables: {
                                input: {
                                    rule: {
                                        idRol: identificador,
                                        descripcion: valores.descripcion.toLocaleUpperCase()
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
                        console.log(`Editando rol ${props.idRol}`);
                        editarRol({
                            variables: {
                                input: {
                                    rulePatch: {
                                        descripcion: valores.descripcion
                                    },
                                    idRol: props.idRol,
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
                                htmlFor='descripcion'
                            >
                                Rol
                            </label>
                            <input 
                                type="text" 
                                id="descripcion" 
                                name="descripcion" 
                                placeholder="Developer" 
                                value={values.descripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.descripcion && errors.descripcion && <div className='error'> {errors.descripcion} </div>}
                        </div>
                        <button type="submit" disabled={isSubmitting}  className={'btn btn-primary'} >
                            {props.mode === "create" ? "Crear" : "Editar"}
                        </button>
                        {/* <Link to={'/roles/insert'} class="au-btn au-btn-icon au-btn--green au-btn--small">
                            <button class="au-btn au-btn-icon au-btn--green au-btn--small"
                            > Volver al listado
                            </button>
                        </Link> */}
                        {formularioEnviado && <p className='exito'>Rol creado con éxito.</p>}
                    </form>
                )} 
            </Formik>
        </>
    );
};

export default RolForm;