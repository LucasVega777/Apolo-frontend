import React, {useState, useEffect} from "react";
import logo from './logo.png';
import logormbg from './logormbg.png';
import Footer from "./componentes/footer";
import Palabras from "./Palabras";
import axios from 'axios';
import usuariopng from './usuario.png'
import Header from './componentes/header'


function HomePage() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [datos, setDatos] = useState([]);

  const buscar = async(str) => {
    if (str.length === 0) {
        setTerminoBusqueda('')
        return;
    }
    setTerminoBusqueda(encodeURI(str));
  }

  
  const busqueda = async() => {
    let url = `https://api-lds.herokuapp.com/api/v1/palabras/busqueda?termino=${terminoBusqueda}`;
    let response = await axios.get(url);
    setDatos(response.data);    
  }

  useEffect(() => {}, [datos]);
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
