import { useMemo } from "react";
import { useTable } from "react-table";
import RolForm from "./RolForm";

export default function Tabla({columnas, data, onEdit, onDelete}) {

    console.log("Columnas: ", columnas);
    console.log("Data: ", data)
    const columns = useMemo(
        () => columnas, []
    )

    const tableInstance = useTable({columns, data})

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
                                            onClick={() => onDelete(row.values.idRol)}
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