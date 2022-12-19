import { useQuery } from '@apollo/client';
import React, { Fragment, useState } from 'react'
import { GET_ALL_ROLES } from '../../graphql/querys';

const SelectRol = (props) => {

    //Consulta graphql donde consumimos el recurso para mostrar 
    //el listado de colores desde la base de datos
    const {data, loading, error} = useQuery(GET_ALL_ROLES)

    const [allRoles, setRoles] = useState([])
    
    if (data?.allRules?.nodes && allRoles.length === 0) {
        setRoles(data.allRules.nodes);
    }
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    const listadoDeReglas = allRoles.map(
        regla => {
            return {
                value: regla.idRol,
                label: regla.descripcion
            }
        }
    )

    return (
        <div className="column">
            <div className="field">
                <label className="label" htmlFor="">Roles:</label>
                <div className="control">
                    <div className='select is-fullwidth'>

                        {data && (
                            <select
                                name="idRol"
                                onChange={(e) => props.handleChange(e)}
                                value={props.defaultValue ? props.defaultValue : ''}
                            >
                                <option value="" disabled >Seleccione un rol.</option>
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

    // if (data) {
    //     // Obtiene los datos del query
    //     const reglasDelMongoDB = data.getReglaByProducto
    //     // Verifica la longitud del array
    //     if (reglasDelMongoDB.length > 0) {
    //         listadoDeReglas = allRoles.map(
    //             regla => {
    //                 return {
    //                     value: regla._id,
    //                     label: regla.descripcion
    //                 }
    //             }
    //         )
    //     }
    //     else {
    //         listadoDeReglas = []
    //     }
    //     return (
    //         <div className="column">
    //             <div className="field">
    //                 <label className="label" htmlFor="">Regla:</label>
    //                 <div className="control">
    //                     <div className='select is-fullwidth'>

    //                         {data && (
    //                             <select
    //                                 name="idReglaPredefinida"
    //                                 onChange={(e) => props.handleChange(e)}
    //                                 value={props.defaultValue ? props.defaultValue : ''}
    //                             >
    //                                 <option value="" disabled >Seleccione la regla.</option>
    //                                 {listadoDeReglas.map((x, i) => {
    //                                     return <option key={i} value={x.value}>{x.label}</option>
    //                                 })}
    //                             </select>
    //                         )}

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div className="column">
    //             <div className="field">
    //                 <label className="label" htmlFor="">Regla:</label>
    //                 <div className="control">
    //                     <div className='select is-fullwidth'>
    //                         <select
    //                             name="idReglaPredefinida"
    //                             onChange={(e) => props.handleChange(e)}
    //                             value={props.defaultValue ? props.defaultValue : ''}
    //                         >
    //                             <option value="" disabled >Seleccione la regla.</option>
    //                         </select>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

}

export default SelectRol