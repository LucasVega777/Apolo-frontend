import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { CREAR_USER_STORY } from "../../graphql/mutaciones";

export const UserStoryForm = (props) => {
    const [createUserStory, { data, loading, error }] =
        useMutation(CREAR_USER_STORY);

    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error}`;
    console.log(data)

    return (
        <Formik
            initialValues={{
                descripcion: "",
                estimacion: "",
                titulo: "",
                idUserStory: Math.floor(Math.random() * 100),
                idEstado: "1",
                idBacklog: 1,
            }}
            validate={(values) => {
                const errors = {};
                if (!values.descripcion) {
                    errors.descripcion = "Required";
                }
                if (!values.estimacion) {
                    errors.estimacion = "Required";
                }
                if (!values.titulo) {
                    errors.titulo = "Required";
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                createUserStory({
                    variables: {
                        input: {
                            usersStory: {
                                descripcion: values.descripcion,
                                estimacion: values.estimacion,
                                titulo: values.titulo,
                                idUserStory: values.idUserStory,
                                idEstado: values.idEstado,
                                idBacklog: values.idBacklog,
                            },
                        },
                    },
                });
            }}
        >
            <Form>
                <label htmlFor="descripcion">Descripcion</label>
                <Field name="descripcion" type="text" />
                <ErrorMessage name="descripcion" component="div" />

                <label htmlFor="estimacion">Estimacion</label>
                <Field name="estimacion" type="text" />
                <ErrorMessage name="estimacion" component="div" />

                <label htmlFor="titulo">Titulo</label>
                <Field name="titulo" type="text" />
                <ErrorMessage name="titulo" component="div" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}