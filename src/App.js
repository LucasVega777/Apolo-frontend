import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from './login'
import Header from "./componentes/header";
import * as ProyectoHome from "./componentes/proyecto/home";
import Footer from "./componentes/footer";


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
              element={<Roles/>}/>
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
      <section id={'hero'} className={'hero'}>
        <div className={'container'}>
          <h1> Usuarios  </h1>
        </div>   
      </section>
      <Footer/>
    </>
  ) 
}


const Roles = function (){

  return  (
    <>
      <Header/>
      <section id={'hero'} className={'hero'}>
        <div className={'container'}>
          <h1> Roles  </h1>
        </div>    
        </section>
      <Footer/>
    </>
  )
}


const Proyectos = function (){

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