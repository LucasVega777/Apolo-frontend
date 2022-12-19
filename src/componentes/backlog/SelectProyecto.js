import { useQuery } from '@apollo/client';
import React, { Fragment, useState } from 'react'
import { GET_ALL_PROYECTOS } from '../../graphql/querys';


const SelectProyecto = (props) => {

    //Consulta graphql donde consumimos el recurso para mostrar 
    //el listado de colores desde la base de datos
    const {data, loading, error} = useQuery(GET_ALL_PROYECTOS)

    const [proyectos, setProyectos] = useState([])
    
    if (data?.allProjects?.nodes && proyectos.length === 0) {
        setProyectos(data.allProjects.nodes);
    }
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    const listadoDeReglas = proyectos.map(
        permiso => {
            return {
                value: +permiso.idProyecto,
                label: permiso.descripcion
            }
        }
    )

    return (
        <div className="column">
            <div className="field">
                <label className="label" htmlFor="">Proyectos:</label>
                <div className="control">
                    <div className='select is-fullwidth'>

                        {data && (
                            <select
                                name="idProyecto"
                                onChange={(e) => props.handleChange(e)}
                                value={props.defaultValue ? props.defaultValue : ''}
                            >
                                <option value="" disabled >Seleccione un proyecto.</option>
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

export default SelectProyecto