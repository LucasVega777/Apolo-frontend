import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import { CREAR_PROYECTO } from "../../../mutations/Proyectos";

const FormularioInsertProyecto = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    const [crearProyecto, { data, loading, error }] =
        useMutation(CREAR_PROYECTO);

    return (
        <>
            <Formik
                initialValues={{
                    descripcion: "",
                }}
                validate={(valores) => {
                    let errors = {};
                    // En caso de que la descripcion sea nula o un string
                    // vacio muestra el mensaje.
                    if (!valores.descripcion || "") {
                        errors.descripcion = "Por favor. Ingresa un nombre.";
                        return errors;
                    }
                }}
                onSubmit={(valores, { resetForm }) => {
                    crearProyecto({
                        variables: {
                            input: {
                                project: {
                                    idProyecto: Math.floor(
                                        Math.random() * (1000 - 0)
                                    ),
                                    descripcion: valores.descripcion,
                                    fechaInicio: valores.fechaInicio,
                                    fechaFin: valores.fechaFin,
                                },
                            },
                        },
                    });
                    console.log(data);
                    if (data) {
                        resetForm();
                        // Acá es donde hago la conexión a la api o sea,
                        // insertar en BD.
                        console.log(valores);
                        console.log("OK");
                        cambiarFormularioEnviado(true);
                        setTimeout(() => cambiarFormularioEnviado(false), 3000);
                    }
                }}
            >
                {({
                    handleSubmit,
                    values,
                    handleChange,
                    handleBlur,
                    errors,
                    touched,
                }) => (
                    <form className="formulario" onSubmit={handleSubmit}>
                        <p className="etiqueta">Crear un nuevo permiso</p>
                        <div>
                            <label htmlFor="descripcion">Permiso</label>
                            <input
                                type="text"
                                id="descripcion"
                                name="descripcion"
                                placeholder="Nombre del proyecto"
                                value={values.descripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.descripcion && errors.descripcion && (
                                <div className="error">
                                    {" "}
                                    {errors.descripcion}{" "}
                                </div>
                            )}
                            <input
                                type="date"
                                name="fechaInicio"
                                id="fechaInicio"
                                value={values.fechaInicio}
                                onChange={handleChange}
                            />
                            <input
                                type="date"
                                name="fechaFin"
                                id="fechaFin"
                                value={values.fechaFin}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit"> Guardar </button>
                        {formularioEnviado && (
                            <p className="exito">Proyecto creado con éxito.</p>
                        )}
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FormularioInsertProyecto;
