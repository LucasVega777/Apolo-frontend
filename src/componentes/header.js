import React, {useState} from "react";

function Header () {
    const [menu, setMenu] = useState('mobile-nav-show');
    const [x, setX] = useState('mobile-nav-hide d-none');
    return (
        <header id={'header'} className={'header d-flex align-items-center fixed-top'}>
          <div className={'container-fluid container-xl d-flex align-items-center justify-content-between'}>

            <a href={'/'} className={'logo d-flex align-items-center'}>
              <h1>IS2</h1>
            </a>
            <i className={'mobile-nav-toggle ' + menu + ' bi bi-list'} onClick={() => {setX('mobile-nav-show'); setMenu('mobile-nav-hide d-none')}}></i>
            <i className={'mobile-nav-toggle ' + x + ' bi bi-x'} onClick={() => {setX('mobile-nav-hide d-none'); setMenu('mobile-nav-show')}}></i>
            <nav id={'navbar'} className={'navbar'}
            style={{right: (x === 'mobile-nav-show') ? '0' : '0'}}>
              <ul>
                <li><a href={'/'} className={'active'}>Home</a></li>
                
                <li class="dropdown"><a href="#"><span>Seguridad</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                  <ul>
                  <li><a href={'/roles'}>Roles</a></li>
                  <li><a href={'/usuarios'}>Usuarios</a></li>
                  <li><a href={'/permisos'}>Permisos</a></li>
                  <li><a href={'/asignar_roles_permisos'}>Asignar roles a permisos</a></li>
                  <li><a href={'/forms'}>Formulario</a></li>
                  </ul>
                </li>
                <li class="dropdown"><a href="#"><span>Gestion</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                  <ul>
                    <li><a href={'/proyectos'}>Proyectos</a></li>
                    <li><a href={'/backlogs'}>Backlogs</a></li>
                    <li><a href={'/sprints'}>Sprints</a></li>
                    <li><a href={'/gestion'}>Gestion de Proyectos</a></li>
                  </ul>
                </li>
                <li><a href={'/apolo-frontend'}>Cerrar Sesion</a></li>
              </ul>
            </nav>

          </div>
        </header>
    )
}

export default Header;