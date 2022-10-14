import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_ROLES } from '../../queries/Roles';


const SelectRol = (props) => {

    //Consulta graphql donde consumimos el recurso para mostrar 
    //el listado de colores desde la base de datos
    const roles = useQuery(
        GET_ALL_ROLES
    )

    // Desestructura los datos a utilizar.
    const {data, error, loading} = roles

    
    if(data) {
        let todosLosRoles = []
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

        return (
            <div className="column">
                <div className="field">
                    <label className="label" htmlFor="">Listado de roles:</label>
                    <div className="control">
                        <div className='select is-fullwidth'>
                            
                            {data && (
                                <select
                                    name="descripcion"
                                    onChange={(e) => props.handleChange(e)}
                                    value={props.defaultValue ? props.defaultValue : ''}
                                >
                                    <option value="" disabled >Seleccione un rol.</option>
                                        {todosLosRoles.map((x, i) => {
                                            return <option key={i} value={x.value}>{x.label}</option>
                                        })}
                                </select>
                            )}
    
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }
    else {
        return(
            <div className="column">
                <div className="field">
                    <label className="label" htmlFor="">Regla:</label>
                    <div className="control">
                        <div className='select is-fullwidth'>
                            <select
                                name="idReglaPredefinida"
                                onChange={(e) => props.handleChange(e)}
                                value={props.defaultValue ? props.defaultValue : ''}
                            >
                                <option value="" disabled >Seleccione la regla.</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SelectRol