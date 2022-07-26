import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./login";
import Header from "./componentes/header";
import TablaRol from "./componentes/rol/Rol";
import * as ProyectoHome from "./componentes/proyecto/home";
import Footer from "./componentes/footer";
import Usuario from "./componentes/usuarios/home"
import DataTable from "./componentes/usuarios/dataTable"
import FRMusuario from "./componentes/usuarios/formulario"
import { useNavigate } from 'react-router-dom';
import Permiso from "./componentes/permisos/Permiso"
import RolPermiso from "./componentes/roles_permisos/RolPermiso";
import Form from "./componentes/formulario/Formulario";
import { GestionProyectos } from "./componentes/gestion/home";
import Formulario from "./componentes/formulario/TablaForm";
import FormularioEditar from './componentes/usuarios/formularioEditar';
import Backlog from "./componentes/backlog/Backlog"
import Sprints from "./componentes/sprints/Sprints";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact key={"/"} element={<HomePage/>}/>
            <Route path="/apolo-frontend" exact key={"/apolo-frontend"} 
              element={<Login/>}/>
            <Route path="/apolo-frontend/usuarios" exact key={"/apolo-frontend"} 
              element={<Redireccion/>}/>
            <Route path="/usuarios" exact key={"/usuarios"} 
              element={<Usuarios/>}/>
            <Route path="/roles" exact key={"/roles"} 
              element={<Roles/>}/>
            <Route path="/permisos" exact key={"/permisos"} 
              element={<Permisos/>}/>
            <Route path="/asignar_roles_permisos" exact key={"/asignar_roles_permisos"} 
              element={<RolesPermisos/>}/>
            <Route path="/forms" exact key={"/forms"} 
              element={<Forms/>}/>
            <Route path="/proyectos" exact key={"/proyectos"} 
              element={<Proyectos/>}/>
            <Route path="/backlogs" exact key={"/backlogs"} 
              element={<Backlogs/>}/>
            <Route path="/sprints" exact key={"/backlogs"} 
              element={<AllSprints/>}/>
            <Route
                    path="/gestion"
                    exact
                    key={"/gestion"}
                    element={<Gestion />}
                />
            <Route path="/editar/usuarios/:id" exact key={"/usuarios/editar"} 
              element={<FormularioEditar/>}/>
        </Routes>
      </BrowserRouter>
  );
}


const Usuarios = function (){

  return (
    <>
      <Header/>
          <Usuario/>
      <Footer/>
    </>
  ) 
}



const Gestion = function () {
    return (
        <>
            <Header />
            <section id={"hero"} className={"hero"}>
                <div className={"container"}>
                    <GestionProyectos />
                </div>
            </section>
            <Footer />
        </>
    );
};

const Roles = function () {
    return (
        <>
            <Header />
            <section id={"hero"} className={"hero"}>
                <TablaRol />
            </section>
            <Footer />
        </>
    );
};



const Proyectos = function () {
  return (
    <>
      <Header/>
      <section id={'hero'} className={'hero'}>
      <div className={'container'}>
        <ProyectoHome.default/>
      </div>   
      </section>
      <Footer/>
    </>
  )
}



const Redireccion = function (){
  const navigate = useNavigate();
  

  useEffect(()=>{ navigate('/usuarios') }, [])
  return (
    <>
      <h1> Redireccionando...</h1>
    </>
  )
}



const Permisos = function (){

  return (
    <>
    <>
      <Header/>
      <section id={'hero'} className={'hero'}>
        <Permiso/>  
      </section>
      <Footer/>
    </>
    </>
  )
}

const RolesPermisos = function (){

  return (
    <>
    <>
      <Header/>
      <section id={'hero'} className={'hero'}>
        <RolPermiso/>  
      </section>
      <Footer/>
    </>
    </>
  )
}


const Forms = function (){

  return (
    <>
    <>
      <Header/>
      <section id={'hero'} className={'hero'}>
        <Form/>  
      </section>
      <Footer/>
    </>
    </>
  )
}

const Backlogs = function ( ) {
  return (
    <>
    <>
      <Header/>
      <section id={'hero'} className={'hero'}>
        <Backlog/>  
      </section>
      <Footer/>
    </>
    </>
  )
}


const AllSprints = function () {
  return (
    <>
    <>
      <Header/>
      <section id={'hero'} className={'hero'}>
        <Sprints/>  
      </section>
      <Footer/>
    </>
    </>
  )  
}

export default App;
