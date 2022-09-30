import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul className="ul">
                <li className="li">
                    <Link to="Apolo-frontend/">
                        Inicio
                    </Link>
                </li>
                <li className="li">
                    <Link to="Apolo-frontend/roles/insertar">
                        Insertar Roles
                    </Link>
                </li>
                <li className="li">
                    <Link to="Apolo-frontend/roles/actualizar">
                        Actualizar roles
                    </Link>
                </li>
                <li className="li">
                    <Link to="Apolo-frontend/roles/eliminar">
                        Eliminar roles
                    </Link>
                </li>
                <li className="li">
                    <Link to="Apolo-frontend/permisos/insertar">
                        Insertar Permisos
                    </Link>
                </li>                
                <li className="li">
                    <Link to="Apolo-frontend/permisos/actualizar">
                        Actualizar Permisos
                    </Link>
                </li>
                <li className="li">
                    <Link to="Apolo-frontend/permisos/eliminar">
                        Eliminar Permisos
                    </Link>
                </li>          
                <li className="li">
                    <Link to="Apolo-frontend/roles">
                        Ver roles
                    </Link>
                </li>     
                <li className="li">
                    <Link to="Apolo-frontend/usuarios">
                        Usuarios
                    </Link>
                </li>         
                <li className="li">
                    <Link to="Apolo-frontend/">
                        Cerrar Sesion
                    </Link>
                </li>                                       
            </ul>
        </div>
    )
}


export default SideBar;