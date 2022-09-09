import React, { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_ROLES } from '../../queries/Roles'
import { useTable } from "react-table"; 

const RolTable = () => {

    const columnas = [{
        Header: 'ROL',
        accesor: 'descripcion'
    }]

    const roles = useQuery(GET_ALL_ROLES)

    console.log(roles)

    let data = {
        allRules: {
            edges: {
                descripcion: "HOLA"
            }
        }
    }
    const columns = useMemo(() => columnas, [])
    const queryData = useMemo(() => data.allRules.edges, [])
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      rows,
      prepareRow
    } = useTable({
      columns,
      data: queryData
    })


    return (
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                </tr>
            )
            })}
        </tbody>
        <tfoot>
            {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                ))}
            </tr>
            ))}
        </tfoot>
        </table>
    )
}

export default RolTable