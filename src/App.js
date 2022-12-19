import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from './login'
import Header from "./componentes/header";
import TablaRol from "./componentes/Rol";
import * as ProyectoHome from "./componentes/proyecto/home";



function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact key={"/"} element={<HomePage/>}/>
            <Route path="/frontendaprendelds" exact key={"/frontendaprendelds"} 
              element={<Login/>}/>
            <Route path="/usuarios" exact key={"/usuarios"} 
              element={<Usuarios/>}/>
            <Route path="/roles" exact key={"/roles"} 
              element={<TablaRol/>}/>
            <Route path="/proyectos" exact key={"/proyectos"} 
              element={<Proyectos/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;



const Usuarios = function (){

  return (
    <>
      <Header/>
      <section id={'hero'} className={'hero d-flex align-items-center'}></section>
        <div className={'container'}>
          <h1> Usuarios  </h1>
        </div>   
    </>
  ) 
}


const Roles = function (){

  return  (
    <>
      <Header/>
      <section id={'hero'} className={'hero d-flex align-items-center'}></section>
        <div className={'container'}>
          <h1> Roles  </h1>
        </div>    
    </>
  )
}


const Proyectos = function (){

  return (
    <>
        <div className={'container'}>
          <ProyectoHome.default/>
        </div>   
    </>
  )
}