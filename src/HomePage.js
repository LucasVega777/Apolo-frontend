import React, {useState, useEffect} from "react";
import logo from './logo.png';
import logormbg from './logormbg.png';
import Footer from "./componentes/footer";
import Palabras from "./Palabras";
import axios from 'axios';
import usuariopng from './usuario.png'

function HomePage() {
  const [menu, setMenu] = useState('mobile-nav-show');
  const [x, setX] = useState('mobile-nav-hide d-none');
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
        <header id={'header'} className={'header d-flex align-items-center fixed-top'}>
          <div className={'container-fluid container-xl d-flex align-items-center justify-content-between'}>

            <a href={'https://lucasvega777.github.io/frontendAprendeLDS/'} className={'logo d-flex align-items-center'}>
              <h1>IS2</h1>
            </a>

          </div>
        </header>

        <h1> Pagina principal  </h1>
        <Footer/>
      </div>
  );
}

export default HomePage;
