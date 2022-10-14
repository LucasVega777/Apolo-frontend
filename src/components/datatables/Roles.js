import React, { useState, useEffect } from 'react';
import { GET_ALL_ROLES } from '../../queries/Roles'
import { useQuery } from '@apollo/client';
import FormularioRol from '../Forms/Rol/FormRolInsert';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import { BrowserRouter, Route, 
    Routes, Navigate, Link, useNavigate
} from "react-router-dom";



function Roles() {

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
    }))(TableRow);
      
    function createData(idRol, descripcion) {
    return { idRol, descripcion };
    }

    const { data, loading, error} = useQuery(GET_ALL_ROLES)

    console.log(data)


    let rows 

    if(data) {
        rows = data.allRules.nodes.map(rol => createData(rol.idRol, rol.descripcion) )
    }
    else {
        rows = [createData(0, 'DEVEL')]
    }

      
    const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    });
      
    
    const classes = useStyles();

      
    return (
        <div>
                <Link to ='insertar'>
                    <button class="au-btn au-btn-icon au-btn--green au-btn--small" 
                            href={"/Apolo-frontend/roles/insertar"}
                            // onClick={() => handleClick()}
                            type='submit'
                        >
                            <i class="zmdi zmdi-plus"></i>Nuevo Rol</button>
                </Link>
                <Link to ='eliminar'>
                    <button class="au-btn au-btn-icon au-btn--green au-btn--small" 
                            href={"/Apolo-frontend/roles/eliminar"}
                            // onClick={() => handleClick()}
                            type='submit'
                        >
                            <i class="zmdi zmdi-plus"></i>Eliminar Rol</button>
                </Link>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Identificador Rol</StyledTableCell>
                        <StyledTableCell align="right">Descripcion Rol</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.idRol}>
                        <StyledTableCell component="th" scope="row">
                            {row.idRol}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.descripcion}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    
                    </TableBody>
                </Table>
                </TableContainer>

        </div>

    );
 


    // if(data) {
    //     console.log("ALL: ", data.allRules.nodes.map(
    //         rol => rol.descripcion
    //     ))
    // }

    // const insertar = () => {
    //     return (
    //         <div>
    //             <FormularioRol/>
    //         </div>
    //     )
    // }

    // if(data) {
    //     return (
    //         <section class="p-t-20">
    //             <div class="container">
    //                 <div class="row">
    //                     <div class="col-md-12">
    //                         <h3 class="title-5 m-b-35">Roles</h3>
    //                         <div class="table-data__tool">
    //                             <div class="table-data__tool-left">
    //                                 <div class="rs-select2--light rs-select2--md">
    //                                     <select class="js-select2" name="property">
    //                                         <option selected="selected">All Properties</option>
    //                                         <option value="">Option 1</option>
    //                                         <option value="">Option 2</option>
    //                                     </select>
    //                                     <div class="dropDownSelect2"></div>
    //                                 </div>
    //                                 <div class="rs-select2--light rs-select2--sm">
    //                                     <select class="js-select2" name="time">
    //                                         <option selected="selected">Today</option>
    //                                         <option value="">3 Days</option>
    //                                         <option value="">1 Week</option>
    //                                     </select>
    //                                     <div class="dropDownSelect2"></div>
    //                                 </div>
    //                                 <button class="au-btn-filter">
    //                                     <i class="zmdi zmdi-filter-list"></i>filters</button>
    //                             </div>
    //                             <div class="table-data__tool-right">
    //                                 <button class="au-btn au-btn-icon au-btn--green au-btn--small" href="/Apolo-frontend/roles/insertar"
    //                                     onClick={insertar}
    //                                 >
    //                                     <i class="zmdi zmdi-plus"></i>Nuevo Rol</button>
    //                                 <div class="rs-select2--dark rs-select2--sm rs-select2--dark2">
    //                                     <select class="js-select2" name="type">
    //                                         <option selected="selected">Export</option>
    //                                         <option value="">Option 1</option>
    //                                         <option value="">Option 2</option>
    //                                     </select>
    //                                     <div class="dropDownSelect2"></div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div class="table-responsive table-responsive-data2">
    //                             <table class="table table-data2">
    //                                 <thead>
    //                                     <tr>
    //                                         <th>
    //                                             <label class="au-checkbox">
    //                                                 <input type="checkbox"/>
    //                                                 <span class="au-checkmark"></span>
    //                                             </label>
    //                                         </th>
    //                                         <th>id</th>
    //                                         <th>nombre</th>
    //                                         <th></th>
    //                                     </tr>
    //                                 </thead>
    //                                 <tbody>
    //                                     <tr class="tr-shadow">
    //                                         <td>
    //                                             <label class="au-checkbox">
    //                                                 <input type="checkbox"/>
    //                                                 <span class="au-checkmark"></span>
    //                                             </label>
    //                                         </td>
    
    //                                         <td>{data.allRules.nodes.map(rol => <ul>{rol.idRol}</ul>)}</td>
    //                                         <td>{data.allRules.nodes.map(rol => <ul>{rol.descripcion}</ul>)}</td>
                                            
                                            
    //                                         <td>
    //                                             <div class="table-data-feature">
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
    //                                                     <i class="zmdi zmdi-edit"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
    //                                                     <i class="zmdi zmdi-delete"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="More">
    //                                                     <i class="zmdi zmdi-more"></i>
    //                                                 </button>
    //                                             </div>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="spacer"></tr>
    //                                     <tr class="tr-shadow">
    //                                         <td>
    //                                             <label class="au-checkbox">
    //                                                 <input type="checkbox"/>
    //                                                 <span class="au-checkmark"></span>
    //                                             </label>
    //                                         </td>
    //                                         <td>1</td>
    //                                         <td>
    //                                         Desarrollador
    //                                         </td>
                                            
    //                                         <td>
    //                                             <div class="table-data-feature">
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
    //                                                     <i class="zmdi zmdi-edit"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
    //                                                     <i class="zmdi zmdi-delete"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="More">
    //                                                     <i class="zmdi zmdi-more"></i>
    //                                                 </button>
    //                                             </div>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="spacer"></tr>
    //                                     <tr class="tr-shadow">
    //                                         <td>
    //                                             <label class="au-checkbox">
    //                                                 <input type="checkbox"/>
    //                                                 <span class="au-checkmark"></span>
    //                                             </label>
    //                                         </td>
    //                                         <td>1</td>
    //                                         <td>
    //                                             Usuario
    //                                         </td>
                                            
    //                                         <td>
    //                                             <div class="table-data-feature">
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
    //                                                     <i class="zmdi zmdi-edit"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
    //                                                     <i class="zmdi zmdi-delete"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="More">
    //                                                     <i class="zmdi zmdi-more"></i>
    //                                                 </button>
    //                                             </div>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="spacer"></tr>
    //                                 </tbody>
    //                             </table>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }
    // else {
    //     return (
    //         <section class="p-t-20">
    //             <div class="container">
    //                 <div class="row">
    //                     <div class="col-md-12">
    //                         <h3 class="title-5 m-b-35">Roles</h3>
    //                         <div class="table-data__tool">
    //                             <div class="table-data__tool-left">
    //                                 <div class="rs-select2--light rs-select2--md">
    //                                     <select class="js-select2" name="property">
    //                                         <option selected="selected">All Properties</option>
    //                                         <option value="">Option 1</option>
    //                                         <option value="">Option 2</option>
    //                                     </select>
    //                                     <div class="dropDownSelect2"></div>
    //                                 </div>
    //                                 <div class="rs-select2--light rs-select2--sm">
    //                                     <select class="js-select2" name="time">
    //                                         <option selected="selected">Today</option>
    //                                         <option value="">3 Days</option>
    //                                         <option value="">1 Week</option>
    //                                     </select>
    //                                     <div class="dropDownSelect2"></div>
    //                                 </div>
    //                                 <button class="au-btn-filter">
    //                                     <i class="zmdi zmdi-filter-list"></i>filters</button>
    //                             </div>
    //                             <div class="table-data__tool-right">
    //                                 {/* <button class="au-btn au-btn-icon au-btn--green au-btn--small" href="/Apolo-frontend/roles/insertar"
    //                                     onClick={<FormularioRol/>}
    //                                 >
    //                                     <i class="zmdi zmdi-plus"></i>Nuevo Rol
    //                                 </button> */}
    //                                 <div class="rs-select2--dark rs-select2--sm rs-select2--dark2">
    //                                     <select class="js-select2" name="type">
    //                                         <option selected="selected">Export</option>
    //                                         <option value="">Option 1</option>
    //                                         <option value="">Option 2</option>
    //                                     </select>
    //                                     <div class="dropDownSelect2"></div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div class="table-responsive table-responsive-data2">
    //                             <table class="table table-data2">
    //                                 <thead>
    //                                     <tr>
    //                                         <th>
    //                                             <label class="au-checkbox">
    //                                                 <input type="checkbox"/>
    //                                                 <span class="au-checkmark"></span>
    //                                             </label>
    //                                         </th>
    //                                         <th>id</th>
    //                                         <th>nombre</th>
    //                                         <th></th>
    //                                     </tr>
    //                                 </thead>
    //                                 <tbody>
    //                                     <tr class="tr-shadow">
    //                                         <td>
    //                                             <label class="au-checkbox">
    //                                                 <input type="checkbox"/>
    //                                                 <span class="au-checkmark"></span>
    //                                             </label>
    //                                         </td>
    
    //                                         <td>1</td>
    //                                         <td>HOLA</td>
                                            
                                            
    //                                         <td>
    //                                             <div class="table-data-feature">
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
    //                                                     <i class="zmdi zmdi-edit"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
    //                                                     <i class="zmdi zmdi-delete"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="More">
    //                                                     <i class="zmdi zmdi-more"></i>
    //                                                 </button>
    //                                             </div>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="spacer"></tr>
    //                                     <tr class="tr-shadow">
    //                                         <td>
    //                                             <label class="au-checkbox">
    //                                                 <input type="checkbox"/>
    //                                                 <span class="au-checkmark"></span>
    //                                             </label>
    //                                         </td>
    //                                         <td>1</td>
    //                                         <td>
    //                                         Desarrollador
    //                                         </td>
                                            
    //                                         <td>
    //                                             <div class="table-data-feature">
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
    //                                                     <i class="zmdi zmdi-edit"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
    //                                                     <i class="zmdi zmdi-delete"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="More">
    //                                                     <i class="zmdi zmdi-more"></i>
    //                                                 </button>
    //                                             </div>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="spacer"></tr>
    //                                     <tr class="tr-shadow">
    //                                         <td>
    //                                             <label class="au-checkbox">
    //                                                 <input type="checkbox"/>
    //                                                 <span class="au-checkmark"></span>
    //                                             </label>
    //                                         </td>
    //                                         <td>1</td>
    //                                         <td>
    //                                             Usuario
    //                                         </td>
                                            
    //                                         <td>
    //                                             <div class="table-data-feature">
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
    //                                                     <i class="zmdi zmdi-edit"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
    //                                                     <i class="zmdi zmdi-delete"></i>
    //                                                 </button>
    //                                                 <button class="item" data-toggle="tooltip" data-placement="top" title="More">
    //                                                     <i class="zmdi zmdi-more"></i>
    //                                                 </button>
    //                                             </div>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="spacer"></tr>
    //                                 </tbody>
    //                             </table>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }

}
  
export default Roles;
  