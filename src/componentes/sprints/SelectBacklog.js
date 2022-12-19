import { useQuery } from '@apollo/client';
import React, { Fragment, useState } from 'react'
import { GET_ALL_BACKLOGS } from '../../graphql/querys';


const SelectBacklog = (props) => {

    //Consulta graphql donde consumimos el recurso para mostrar 
    //el listado de colores desde la base de datos
    const {data, loading, error} = useQuery(GET_ALL_BACKLOGS)
    console.log(data);
    const [proyectos, setProyectos] = useState([])
    
    if (data?.allBacklogs?.nodes && proyectos.length === 0) {
        setProyectos(data.allBacklogs.nodes);
    }
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    const listadoDeReglas = proyectos.map(
        permiso => {
            return {
                value: +permiso.idBacklog,
                label: permiso.descripcion
            }
        }
    )

    return (
        <div className="column">
            <div className="field">
                <label className="label" htmlFor="">Backlog:</label>
                <div className="control">
                    <div className='select is-fullwidth'>

                        {data && (
                            <select
                                name="idBacklog"
                                onChange={(e) => props.handleChange(e)}
                                value={props.defaultValue ? props.defaultValue : ''}
                            >
                                <option value="" disabled >Seleccione un backlog.</option>
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

export default SelectBacklog