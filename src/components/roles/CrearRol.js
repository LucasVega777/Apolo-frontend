import React, { Fragment, useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREAR_ROL } from '../../mutations/Roles';
import { GET_ALL_ROLES } from '../../queries/Roles'

function CrearRol (props) {

    // Se estalece el estado incial de las 
    // variables a insertar.

    const initialState = {
        variables: {
            input: {
                rule: {
                  idRol: 0,
                  descripcion: ""
                }
            }
        }
    }

    // iniciaización de variables.
    const [state, setState] = useState(initialState)



    const [crearRol, { loading }] = useMutation(
        CREAR_ROL, {
            variables: {
                idRol: props.idRol
            }, 
            refetchQueries: [
                GET_ALL_ROLES,
                "AllRules"
            ]
        }
    )

    return (
        <div className={'crear-rol'}>
            HIIIIII
        </div>
      
      );



}

export default CrearRol