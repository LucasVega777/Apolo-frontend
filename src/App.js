import React, { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from './utils/funciones'
import swal from "sweetalert2";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


import Login from "./components/Login";
import Principal from './components/Principal';
import Usuarios from './components/Usuarios';
import NavBar from './components/NavBar/Navbar';
import SideBar from './components/SideBar/Sidebar';
import FormularioPermiso from './components/Forms/Permiso/FormInsertPermiso';
import FormularioRol from './components/Forms/Rol/FormRolInsert';
import FormularioUpdateRol from './components/Forms/Rol/FormUpdateRol';
import FormularioDeleteRol from './components/Forms/Rol/FormDeleteRol';
import FormularioUpdatePermiso from './components/Forms/Permiso/FormUpdatePermiso';
import FormularioDeletePermiso from './components/Forms/Permiso/FormDeletePermiso';

function App() {
  const [logged, setLogged] = useState(false);
	const [estado, setEstado] = useState({
    username: '',
    password: ''
	});

  const doLogin = async (data) =>{
    try {
      const users = [
      {'username': 'lvega', 'password': 'lvega123'},
      {'username': 'egomez', 'password': 'egomez123'},
      {'username': 'vdominguez', 'password': 'vero123'},
      {'username': 'alex', 'password': 'alex123'}];
      let exito = false;
      users.forEach(user =>{
        if(user.username == data.username && user.password == data.password){
          exito = true;
          return 0;
        }
      })

      if(exito){
        setLogged(true);
        
      }else{
        notifyError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      notifyError('Error de conexión');
    }
  }

  const logout = async () => {
    console.log("se ejecuta el logout")
		setLogged(false);
	}
  useEffect(() => {}, [logged]);

  if (!logged) {
    return <Login doLogin={doLogin} />;
  }

  return (
    <BrowserRouter>
        <NavBar/>
        <>
          <div className='flex'>
            <SideBar/>
            <div className='content'>
              <Routes>
                <Route path='Apolo-frontend/' exact={true} element={<Principal/>}/>
                <Route path='Apolo-frontend/roles/insertar' exact={true} element={<FormularioRol/>}/>
                <Route path='Apolo-frontend/roles/actualizar' exact={true} element={<FormularioUpdateRol/>}/>
                <Route path='Apolo-frontend/roles/eliminar' exact={true} element={<FormularioDeleteRol/>}/>
                <Route path='Apolo-frontend/permisos/insertar' exact={true} element={<FormularioPermiso/>}/>
                <Route path='Apolo-frontend/permisos/actualizar' exact={true} element={<FormularioUpdatePermiso/>}/>
                <Route path='Apolo-frontend/permisos/eliminar' exact={true} element={<FormularioDeletePermiso/>}/>
              </Routes>
            </div>
          </div>
        </>
    </BrowserRouter>
  );
}

export default App;
