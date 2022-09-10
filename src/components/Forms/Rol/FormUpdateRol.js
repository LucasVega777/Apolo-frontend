import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import {EDITAR_ROL} from '../../../mutations/Roles'



const FormularioUpdateRol = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    const [updateRol, { data, loading, error}] = useMutation(EDITAR_ROL)

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
                    if(!valores.descripcion || "" && !valores.idRol || "") {
                        errors.descripcion = "Por favor ingrese los datos solicitados."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm}) => {

                    updateRol({
                        variables: {
                            input: {
                                idRol: +valores.idRol,
                                rulePatch: {
                                  descripcion: valores.descripcion
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
                        setTimeout( () => cambiarFormularioEnviado(false), 3000)
                    }
                
                }}
            >
                { ({
                    handleSubmit, values, handleChange, handleBlur, errors, touched
                }) => (
                    <form className='formulario' onSubmit={handleSubmit}>
                        <p className='etiqueta'>Actualizar el rol</p>
                        <div>
                            <label 
                                htmlFor='idRol'
                            >
                                identificador del rol
                            </label>
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
                        <button type='submit'> Actualizar rol </button>
                        {formularioEnviado && <p className='exito'>Rol actualizado con éxito.</p>}
                    </form>
                )} 
            </Formik>
        </>
    )
}


export default FormularioUpdateRol;