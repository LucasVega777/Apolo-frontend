// Usando Formk creamos un formulario con validaciones
// para la creacion de nuevos proyectos

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { CREAR_PROYECTO } from "../../graphql/mutaciones";

const ProyectoForm = (props) => {
    const [createProyecto, { data, loading, error }] =
        useMutation(CREAR_PROYECTO);
        
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error}`;

    return (
        <Formik
            initialValues={{ descripcion: "", fechaInicio: "", fechaFin: "" }}
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
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="descripcion" />
                    <ErrorMessage name="descripcion" component="div" />
                    <Field type="text" name="fechaInicio" />
                    <ErrorMessage name="fechaInicio" component="div" />
                    <Field type="text" name="fechaFin" />
                    <ErrorMessage name="fechaFin" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ProyectoForm;
