import React, { Fragment, useState } from 'react'
import { useMutation } from '@apollo/client';
import { EDITAR_ROL } from '../../mutations/Roles';
import { GET_ALL_ROLES } from '../../queries/Roles'

function ActualizarRol (props) {

    // Se estalece el estado incial de las 
    // variables a insertar.

    const initialState = {
        variables: {
            input: {
                rule: {
                  idRol: 0
                }
            }
        }
    }

    // iniciaización de variables.
    const [state, setState] = useState(initialState)


    // Se utiliza el hook useMutation para llamar a la mutacion.
    const [editarRol, { loading }] = useMutation(
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
        <div className={'actualizar-rol'}>
            HIIIIII
        </div>
      
      );



}

export default ActualizarRol