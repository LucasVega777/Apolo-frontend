import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import {ELIMINAR_ROL} from '../../mutations/Roles'



const FormularioDeleteRol = () => {

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