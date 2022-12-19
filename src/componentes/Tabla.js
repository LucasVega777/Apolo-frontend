import { useMemo } from "react";
import { useTable } from "react-table";


export default function Tabla({columnas, data}) {

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
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}