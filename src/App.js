import React, { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from './utils/funciones'
import swal from "sweetalert2";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Login from "./components/Login";
import Principal from './components/Principal';

function App() {
  const [logged, setLogged] = useState(false);
	const [estado, setEstado] = useState({
    username: '',
    password: ''
	});

  const doLogin = async (data) =>{
    try {
      console.log(data)
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
		setLogged(false);
		window.location.href = '/';
	}
  useEffect(() => {}, [logged]);

  if (!logged) {
    return <Login doLogin={doLogin} />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Apolo-frontend/" element={<Principal />} />
        <Route path="/Apolo-frontend/inicio" element={<Principal />} />
        <Route path="/Apolo-frontend/login" element={<Login doLogin={doLogin}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
