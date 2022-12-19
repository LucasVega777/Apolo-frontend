import { GET_ALL_ROLES } from "../graphql/querys";
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import Tabla from "./Tabla";


export default function TablaRol() {

    const initialState = [{
        idRol: 0,
        descripcion: 'Prueba'
    }]

    const roles = useQuery(GET_ALL_ROLES)
    const { data, loading, error } = roles

    const [rol, setRol] = useState(initialState)
    useEffect(() => {
        setRol(rol)
    }, [rol])
    
    // let datos
    // if(data)
    //     datos = data.allRules.nodes
    //     setRol(datos)
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    const columnas = [
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
    ]

    const datoTabla = Tabla(columnas, rol)

    console.log("Dato Tabla: ", datoTabla);

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