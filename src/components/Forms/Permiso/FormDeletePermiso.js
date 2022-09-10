import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { ELIMINAR_PERMISO } from '../../../mutations/Permisos'



const FormularioDeletePermiso = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    const [deletePermiso, { data, loading, error}] = useMutation(ELIMINAR_PERMISO)

    console.log(data)

    return (
        <>
            <Formik
                initialValues={{
                    idPermiso: "",
                }}
                validate={(valores) => {

                    let errors = {}

                    // En caso de que la descripcion sea nula o un string 
                    // vacio muestra el mensaje.
                    if(!valores.idPermiso || "") {
                        errors.descripcion = "Por favor ingrese los datos solicitados."
                        return errors
                    }
                }}
                onSubmit={(valores, {resetForm}) => {

                    deletePermiso({
                        variables: {
                            input: {
                                idPermiso: +valores.idPermiso,
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
                        <p className='etiqueta'>Eliminar permiso</p>
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
                        <button type='submit'> Eliminar permiso </button>
                        {formularioEnviado && <p className='exito'>Permiso eliminado con éxito.</p>}
                    </form>
                )} 
            </Formik>
        </>
    )
}


export default FormularioDeletePermiso;