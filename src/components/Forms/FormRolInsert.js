import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import {CREAR_ROL} from '../../mutations/Roles'



const FormularioRol = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    const [crearRol, { data, loading, error}] = useMutation(CREAR_ROL)

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
                        errors.descripcion = "Por favor. Ingresa un rol."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm}) => {

                    crearRol({
                        variables: {
                            input: {
                                rule: {
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
                        <button type='submit'> Guardar </button>
                        {formularioEnviado && <p className='exito'>Rol creado con éxito.</p>}
                    </form>
                )} 
            </Formik>
        </>
    )
}


export default FormularioRol;