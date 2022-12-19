import { useQuery } from '@apollo/client';
import React, { Fragment, useState } from 'react'


const SelectEstado = (props) => {

    return (
        <div className="column">
            <div className="field">
                <label className="label" htmlFor="">Estado:</label>
                <div className="control">
                    <div className='select is-fullwidth'>

                        <select
                            name="estado"
                            onChange={(e) => props.handleChange(e)}
                            value={props.defaultValue ? props.defaultValue : ''}
                        >
                            <option value="" disabled >Seleccione un estado.</option>
                            <option value="ABIERTO" >ABIERTO</option>
                            <option value="CERRADO" >CERRADO</option>
                        </select>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default SelectEstado