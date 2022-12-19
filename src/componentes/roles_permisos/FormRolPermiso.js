// Usando Formk creamos un formulario con validaciones
// para la creacion de nuevos proyectos

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { CREAR_ROL_PERMISO } from "../../graphql/mutaciones";
import { useState } from "react";
import { EDITAR_ROL_PERMISO } from "../../graphql/mutaciones";
import SelectRol from "./SelectRol";
import SelectPermiso from "./SelectPermiso";

const RolForm = (props) => {
    const [crearRolPermiso, { data, loading, error }] =
        useMutation(CREAR_ROL_PERMISO);
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
    const [editarRolPermiso] = useMutation(EDITAR_ROL_PERMISO);

    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error}`;

    return (
        <>
            <Formik
                initialValues={{
                    idRol: "",
                    idPermiso: ""
                }}
                validate={(valores) => {

                    console.log(valores)
                    let errors = {}

                    // En caso de que la descripcion sea nula o un string 
                    // vacio muestra el mensaje.
                    if((!valores.idRol || "")) {
                        errors.idRol = "Por favor. Ingresa un rol."
                        return errors
                    }

                    if((!valores.idPermiso || "")) {
                        errors.idPermiso = "Por favor. Ingresa un permiso."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm, setSubmitting }) => {
                    if (props.mode === "create") {
                        const max = 1000
                        const min = 1
                        const identificador = Math.ceil(Math.random() * (max - min) + min)
                        crearRolPermiso({
                            variables: {
                                input: {
                                    rulesPermission: {
                                        idRolPermiso: identificador,
                                        idRol: +valores.idRol,
                                        idPermiso: +valores.idPermiso
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
                        console.log(`Editando rol ${props.idRolPermiso}`);
                        editarRolPermiso({
                            variables: {
                                input: {
                                    rulesPermissionPatch: {
                                        idRol: +valores.idRol,
                                        idPermiso: +valores.idPermiso
                                    },
                                    idRolPermiso: +props.idRolPermiso,
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
                        <p className='etiqueta'>Crear un nuevo rol-permiso</p>
                        <div>
                            <SelectPermiso name="idPermiso" defaultValue={values.idPermiso} handleChange={handleChange}/>
                            {touched.idPermiso && errors.idPermiso && <div className='error'> {errors.idPermiso} </div>}
                            <SelectRol name="idRol" defaultValue={values.idRol} handleChange={handleChange}/>
                            {touched.idRol && errors.idRol && <div className='error'> {errors.idRol} </div>}                            
                        </div>
                        <button type="submit" disabled={isSubmitting}  className={'btn btn-primary'} >
                            {props.mode === "create" ? "Crear" : "Editar"}
                        </button>
                        {formularioEnviado && <p className='exito'>Rol-Permiso creado con éxito.</p>}
                    </form>
                )} 
            </Formik>
        </>
    );
};

export default RolForm;