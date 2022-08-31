import React, { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from './utils/funciones'
import swal from "sweetalert2";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


import Login from "./components/Login";
import Principal from './components/Principal';
import Usuarios from './components/Usuarios';
import CrearRol from './components/roles/CrearRol';


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
      <Routes>
        <Route path="/Apolo-frontend/inicio" element={<Principal logout={logout}/>}/>
        <Route path="/Apolo-frontend/usuarios" element={<Usuarios logout={logout}/>}/>
        <Route path="/Apolo-frontend/roles" element={<CrearRol/>}/>
        <Route path="*" element={<Principal logout={logout}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
