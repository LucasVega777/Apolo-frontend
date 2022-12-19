import { GET_ALL_ROLES } from "../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import Tabla from "./Tabla";


export default function TablaRol() {

    const { data, loading, error } = useQuery(GET_ALL_ROLES)
    const [columnas, setColumnas] = useState( [
        {
            Header: "Identificador",
            accessor: "idRol",
            Cell: ({ value }) => <strong>{value}</strong>
        },
        {
            Header: "Nombre",
            accessor: "descripcion",
            Cell: ({ value }) => <strong>{value}</strong>
        }
    ])


    const [roles, setRoles] = useState([])

    if (data.allRules.nodes && roles.length === 0)
        setRoles(data.allRules.nodes);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>
    const datoTabla = Tabla(columnas, roles)

    if(data) {
        return (
            <>
                <h4>Listado de roles</h4>
                {datoTabla}
            </>
        )
    }
    else {
        return (
            <div>HOLA</div>
        )
    }

}