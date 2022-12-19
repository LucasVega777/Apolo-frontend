import React, {useState, useEffect} from "react";
import logo from './logo.png';
import logormbg from './logormbg.png';
import Footer from "./componentes/footer";
import Palabras from "./Palabras";
import axios from 'axios';
import usuariopng from './usuario.png'
import Header from './componentes/header'


function HomePage() {
  return (
      <div>
        <Header/>
        <section id={'hero'} className={'hero d-flex align-items-center'}></section>
        <div className={'container'}>
          <h1> Pagina principal  </h1>
        </div>    
      </div>
  );
}

export default HomePage;
