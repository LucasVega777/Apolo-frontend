// Usando Formk creamos un formulario con validaciones
// para la creacion de nuevos proyectos

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { CREAR_PROYECTO } from "../../graphql/mutaciones";
import { EDITAR_PROYECTO } from "../../graphql/mutaciones";

const ProyectoForm = (props) => {
    const [createProyecto, { data, loading, error }] =
        useMutation(CREAR_PROYECTO);

    const [editProyecto] = useMutation(EDITAR_PROYECTO);

    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error}`;

    return (
        <Formik
            initialValues={{
                descripcion: props.descripcion,
                fechaInicio: props.fechaInicio,
                fechaFin: props.fechaFin,
            }}
            validate={(values) => {
                const errors = {};
                if (!values.descripcion) {
                    errors.descripcion = "Required";
                }
                if (!values.fechaInicio) {
                    errors.fechaInicio = "Required";
                }
                if (!values.fechaFin) {
                    errors.fechaFin = "Required";
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                if (props.mode === "create") {
                    console.log(values);
                    createProyecto({
                        variables: {
                            input: {
                                project: {
                                    descripcion: values.descripcion,
                                    fechaInicio: values.fechaInicio,
                                    fechaFin: values.fechaFin,
                                    idProyecto: Math.floor(Math.random() * 100),
                                },
                            },
                        },
                    });
                } else {
                    console.log(`Editando proyecto ${props.idProyecto}`);
                    editProyecto({
                        variables: {
                            input: {
                                projectPatch: {
                                    descripcion: values.descripcion,
                                    fechaInicio: values.fechaInicio,
                                    fechaFin: values.fechaFin,
                                },
                                idProyecto: props.idProyecto,
                            },
                        },
                    });
                }
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <div>
                    <Form>
                        <Field
                            type="text"
                            name="descripcion"
                            placeholder={props.descripcion}
                        />
                        <ErrorMessage name="descripcion" component="div" />
                        <Field
                            type="text"
                            name="fechaInicio"
                            placeholder={props.fechaInicio}
                        />
                        <ErrorMessage name="fechaInicio" component="div" />
                        <Field
                            type="text"
                            name="fechaFin"
                            placeholder={props.fechaInicio}
                        />
                        <ErrorMessage name="fechaFin" component="div" />
                        <button type="submit" disabled={isSubmitting}  className={'btn btn-primary'} >
                            {props.mode === "create" ? "Crear" : "Editar"}
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default ProyectoForm;