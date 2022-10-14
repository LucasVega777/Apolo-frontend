import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Field, Formik } from 'formik';
import {ELIMINAR_ROL} from '../../../mutations/Roles'
import { GET_ALL_ROLES } from '../../../queries/Roles';


const FormularioDeleteRol = () => {

    const roles = useQuery(
        GET_ALL_ROLES
    )


    let datoRol
    let todosLosRoles = []
    if(roles) {

        const { data, loading, error} = roles

        // Obtiene los datos del query
        const all = data.allRules.edges
        // Verifica la longitud del array
        if(data.allRules.edges.length > 0) {
            todosLosRoles = data.allRules.edges.map(
                regla => {
                    return {
                        value: regla._id,
                        label: regla.descripcion
                    }
                }
            )
        }
        else {
            todosLosRoles = []
        }
    }

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    const [deleteRol, { data, loading, error}] = useMutation(ELIMINAR_ROL)

    console.log(data)

    return (
        <>
            <Formik
                initialValues={{
                    idRol: "",
                    descripcion: ""
                }}
                validate={(valores) => {

                    let errors = {}

                    // En caso de que la descripcion sea nula o un string 
                    // vacio muestra el mensaje.
                    if(!valores.idRol || "") {
                        errors.descripcion = "Por favor ingrese los datos solicitados."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm}) => {

                    deleteRol({
                        variables: {
                            input: {
                                idRol: +valores.idRol,
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
                        setTimeout( () => cambiarFormularioEnviado(false), 3000)
                    }
                
                }}
            >
                { ({
                    handleSubmit, values, handleChange, handleBlur, errors, touched
                }) => (
                    <form className='formulario' onSubmit={handleSubmit}>
                        <p className='etiqueta'>Eliminar rol</p>
                        <div>
                            <label 
                                htmlFor='idRol'
                            >
                                Identificador del rol
                            </label>
                            <Field
                                as="select" name="Rol"
                            >
                                {/* <option value="" disabled >Seleccione un rol.</option> */}
                                    {/* {todosLosRoles.map((x, i) => {
                                        return <option key={i} value={x.value}>{x.label}</option>
                                    })} */}
                            </Field>
                            <input 
                                type="text" 
                                id="idRol" 
                                name="idRol" 
                                placeholder="1" 
                                value={values.idRol}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.idRol && errors.idRol && <div className='error'> {errors.idRol} </div>}
                        </div>
                        <button type='submit'> Eliminar rol </button>
                        {formularioEnviado && <p className='exito'>Rol eliminado con éxito.</p>}
                    </form>
                )} 
            </Formik>
        </>
    )
}


export default FormularioDeleteRol;