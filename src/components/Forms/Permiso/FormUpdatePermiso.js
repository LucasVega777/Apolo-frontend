import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { EDITAR_PERMISO } from '../../../mutations/Permisos'



const FormularioUpdatePermiso = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    const [updatePermiso, { data, loading, error}] = useMutation(EDITAR_PERMISO)

    return (
        <>
            <Formik
                initialValues={{
                    idPermiso: "",
                    descripcion: ""
                }}
                validate={(valores) => {

                    let errors = {}

                    // En caso de que la descripcion sea nula o un string 
                    // vacio muestra el mensaje.
                    if(!valores.descripcion || "" && !valores.idPermiso || "") {
                        errors.descripcion = "Por favor ingrese los datos solicitados."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm}) => {

                    updatePermiso({
                        variables: {
                            input: {
                                idPermiso: +valores.idPermiso,
                                permissionPatch: {
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
                        <p className='etiqueta'>Actualizar el permiso</p>
                        <div>
                            <label 
                                htmlFor='idPermiso'
                            >
                                Identificador del permiso
                            </label>
                            <input 
                                type="text" 
                                id="idPermiso" 
                                name="idPermiso" 
                                placeholder="1" 
                                value={values.idPermiso}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.idPermiso && errors.idPermiso && <div className='error'> {errors.idPermiso} </div>}
                        </div>
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
                        <button type='submit'> Actualizar permiso </button>
                        {formularioEnviado && <p className='exito'>permiso actualizado con éxito.</p>}
                    </form>
                )} 
            </Formik>
        </>
    )
}


export default FormularioUpdatePermiso;