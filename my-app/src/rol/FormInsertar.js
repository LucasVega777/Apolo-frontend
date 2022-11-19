import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ROL } from '../graphql/queries'


const InsertarRol = () => {

    const insertar = (nombreRol) => {
        const [crearRol, { data, loading, error}] = useMutation(CREAR_ROL)

        if(!nombreRol) {
            throw new Error("El nombre del rol es requerido.")
        }

        crearRol({
            variables: {
                input: {
                    rule: {
                        descripcion: nombreRol
                    }
                }
            }
        })

        return "El rol fue agregado con éxito."
    }

    const [values, setValues] = useState({
        nombreRol: ""
    });

    const handleSubmit = (evt) => {
        /*
          Previene el comportamiento default de los
          formularios el cual recarga el sitio
        */
        evt.preventDefault();
    
        // Aquí puedes usar values para enviar la información
    }


    const handleChange = (evt) => {
        /*
          evt.target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
        const { target } = evt;
        const { name, value } = target;
    
        /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento
        */
        const newValues = {
          ...values,
          [name]: value,
        };
    
        // Sincroniza el estado de nuevo
        setValues(newValues);
    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombreRol">Nombre del rol</label>
          <input
            id="nombreRol"
            name="nombreRol"
            type="nombreRol"
            value={values.nombreRol}
            onChange={handleChange}
          />
          <button type="submit">Guardar</button>
        </form>
      );

}


export default InsertarRol