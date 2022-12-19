import { useQuery } from '@apollo/client';
import React, { Fragment, useState } from 'react'
import { GET_ALL_PERMISOSS } from '../../graphql/querys';


const SelectPermiso = (props) => {

    //Consulta graphql donde consumimos el recurso para mostrar 
    //el listado de colores desde la base de datos
    const {data, loading, error} = useQuery(GET_ALL_PERMISOSS)

    const [permisos, setPermisos] = useState([])
    
    if (data?.allPermissions?.nodes && permisos.length === 0) {
        setPermisos(data.allPermissions.nodes);
    }
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    const listadoDeReglas = permisos.map(
        permiso => {
            return {
                value: permiso.idPermiso,
                label: permiso.descripcion
            }
        }
    )

    return (
        <div className="column">
            <div className="field">
                <label className="label" htmlFor="">Permisos:</label>
                <div className="control">
                    <div className='select is-fullwidth'>

                        {data && (
                            <select
                                name="idPermiso"
                                onChange={(e) => props.handleChange(e)}
                                value={props.defaultValue ? props.defaultValue : ''}
                            >
                                <option value="" disabled >Seleccione un permiso.</option>
                                {listadoDeReglas.map((x, i) => {
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

export default SelectPermiso