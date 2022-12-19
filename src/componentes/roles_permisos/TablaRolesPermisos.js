import { useMemo } from "react";
import { useTable } from "react-table";

export default function Tabla({columnas, data, onEdit, onDelete}) {

    console.log("Columnas: ", columnas);
    console.log("Data: ", data)
    const columns = useMemo(
        () => columnas, []
    )

    const dataFinal = data.map(d => {
        return {
            idRolPermiso: d.idRolPermiso,
            rol: d.ruleByIdRol.descripcion,
            permiso: d.permissionByIdPermiso.descripcion
        }
    })

    const tableInstance = useTable({columns, data: dataFinal})

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = tableInstance


    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => {
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => {
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    })
                                }
                            </tr>
                        })
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            console.log("ROW: ", row);
                            prepareRow(row);
                            return(
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        })
                                    }
                                    <td>
                                        <button
                                            onClick={() => onEdit(row.values)}
                                            className={'btn btn-primary'} 
                                        >
                                            Editar
                                        </button>
                                    </td>
                                    <td></td><td></td><td></td>
                                    <td>
                                        <button
                                            onClick={() => onDelete(row.values.idRolPermiso)}
                                            className={'btn btn-primary'} 
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>

            </table>
        </>
    )
}