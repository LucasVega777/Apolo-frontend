// Usando Formk creamos un formulario con validaciones
// para la creacion de nuevos proyectos

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { CREAR_SPRINT } from "../../graphql/mutaciones";
import { useState } from "react";
import { UPDATE_SPRINT } from "../../graphql/mutaciones";
import { GET_ALL_SPRINTS } from "../../graphql/querys";
import swal from 'sweetalert';
import SelectBacklog from "./SelectBacklog";
import SelectEstado from "./SelectEstado";
import SelectProyecto from "../backlog/SelectProyecto";

const SprintForm = (props) => {
    const [crearSprint, { data, loading, error }] =
        useMutation(CREAR_SPRINT);
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
    const [editarSprint] = useMutation(UPDATE_SPRINT);
    const sprs = useQuery(GET_ALL_SPRINTS)
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error}`;

    return (
        <>
            <Formik
                initialValues={{
                    idSprint: "",
                    descripcion: "",
                    nombreProyecto: "",
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idProyecto: "",
                    idBacklog: "",
                    estado: ""
                }}
                validate={(valores) => {

                    console.log(valores)
                    let errors = {}

                    // En caso de que la descripcion sea nula o un string 
                    // vacio muestra el mensaje.
                    if(!valores.descripcion || "") {
                        errors.descripcion = "Por favor. Ingresa una descripcion."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm, setSubmitting }) => {
                    if (props.mode === "create") {
                        const max = 1000
                        const min = 1
                        const identificador = Math.ceil(Math.random() * (max - min) + min)
                        
                        crearSprint({
                            variables: {
                                input: {
                                    sprint: {
                                        "idSprint": identificador,
                                        "fechaInicio": new Date(valores.fechaInicio),
                                        "fechaFin": new Date(valores.fechaFin),
                                        "descripcion": valores.descripcion.toLocaleUpperCase(),
                                        "idBacklog": (!valores.idBacklog || "") ? null : +valores.idBacklog,
                                        "estado": valores.estado
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

                        editarSprint({
                            variables: {
                                input: {
                                    sprintPatch: {
                                        descripcion: valores.descripcion,
                                        fechaFin: new Date(valores.fechaFin),
                                        idBacklog: (!valores.idProyecto || "") ? null : +valores.idBacklog,
                                        estado: valores.estado
                                    },
                                    idSprint: +props.idSprint,
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
                        <p className='etiqueta'>Crear un nuevo backlog</p>
                        <div>
                            <label 
                                htmlFor='descripcion'
                            >
                                Descripcion
                            </label>
                            <input 
                                type="text" 
                                id="descripcion" 
                                name="descripcion" 
                                placeholder="Ingrese un texto" 
                                value={values.descripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.descripcion && errors.descripcion && <div className='error'> {errors.descripcion} </div>}
                            <label 
                                htmlFor='fechaInicio'
                            >
                                Fecha Inicio
                            </label>
                            <input 
                                type="text" 
                                id="fechaInicio" 
                                name="fechaInicio" 
                                placeholder="2022-12-19" 
                                value={values.fechaInicio}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.fechaInicio && errors.fechaInicio && <div className='error'> {errors.fechaInicio} </div>}
                            <label 
                                htmlFor='fechaFin'
                            >
                                Fecha Fin
                            </label>
                            <input 
                                type="text" 
                                id="fechaFin" 
                                name="fechaFin" 
                                placeholder="2022-12-19" 
                                value={values.fechaFin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.fechaFin && errors.fechaFin && <div className='error'> {errors.fechaFin} </div>}
                            <SelectBacklog name="idBackog" defaultValue={values.idBacklog} handleChange={handleChange}/>
                            <SelectEstado name="estado" defaultValue={values.estado} handleChange={handleChange}/>
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

export default SprintForm;