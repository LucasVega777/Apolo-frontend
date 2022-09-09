import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import {CREAR_PERMISO} from '../../mutations/Permisos'



const FormularioPermiso = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    const [crearPermiso, { data, loading, error}] = useMutation(CREAR_PERMISO)

    return (
        <>
            <Formik
                initialValues={{
                    descripcion: ""
                }}
                validate={(valores) => {

                    let errors = {}

                    // En caso de que la descripcion sea nula o un string 
                    // vacio muestra el mensaje.
                    if(!valores.descripcion || "") {
                        errors.descripcion = "Por favor. Ingresa una descripción."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm}) => {

                    crearPermiso({
                        variables: {
                            input: {
                                permission: {
                                    descripcion: valores.descripcion.toLocaleUpperCase()
                                }
                            }
                        }
                    })

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
                        <p className='etiqueta'>Crear un nuevo permiso</p>
                        <div>
                            <label 
                                htmlFor='descripcion'
                            >
                                Permiso
                            </label>
                            <input 
                                type="text" 
                                id="descripcion" 
                                name="descripcion" 
                                placeholder="CRUD" 
                                value={values.descripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.descripcion && errors.descripcion && <div className='error'> {errors.descripcion} </div>}
                        </div>
                        <button type='submit'> Guardar </button>
                        {formularioEnviado && <p className='exito'>Permiso creado con éxito.</p>}
                    </form>
                )} 
            </Formik>
        </>
    )
}


export default FormularioPermiso;