import React, {useState, useEffect} from "react";
import Footer from "./componentes/footer";
import axios from 'axios';
import usuariopng from './usuario.png'
import HomePage from "./HomePage";
import { useNavigate } from 'react-router-dom';
import { notifyError } from "./utils/funciones";
import {ToastContainer} from 'react-toastify'
import { useQuery } from "@apollo/client";
import { GET_USER_BY_CREDENTIALS, GET_ALL_USERS } from "./graphql/querys";

function Login() {
  const [menu, setMenu] = useState('mobile-nav-show');
  const [x, setX] = useState('mobile-nav-hide d-none');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [datos, setDatos] = useState([]);
  const [loggeado, setLoggeado] = useState(false)
  const navigate = useNavigate();
  
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  const buscar = async(str, id) => {
    if (id=='username'){
      if (str.length === 0) {
        setUsername('')
        return;
      }
      setUsername(str);
    } else {
      if (str.length === 0) {
        setPassword('')
        return;
      }
      setPassword(str);
    }
    
  }

  
  const busqueda = async() => {
    try {
      let coincide = false;
      for (const usuario of data.allUsers.nodes) {
        if(username == usuario.name && password == usuario.password){
          coincide = true;
        }
      } 
      if(coincide){
        setLoggeado(true)
        navigate('/')
      } else{
        notifyError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      notifyError('Error desconocido');
    }
  }

  useEffect(() => {}, [loggeado]);
  
  
  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    
        <header id={'header'} className={'header d-flex align-items-center fixed-top'}>
          <div className={'container-fluid container-xl d-flex align-items-center justify-content-between'}>

            <a href={'/frontendAprendeLDS'} className={'logo d-flex align-items-center'}>
              <h1>IS2</h1>
            </a>

          </div>
        </header>

        <section id={'hero'} className={'hero d-flex align-items-center'}>
          <div className={'container'}>
            <div className={'row gy-4 d-flex justify-content-between'}>
              <div className={'col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center'}>
                <h2 data-aos={'fade-up'}> Bienvenido/a</h2>
                <section>
                  <div
                    className={'form-search d-flex align-items-stretch mb-3'} >
                      <input type={'text'} className={'form-control'} placeholder={'Ingrese su nombre de usuario'} 
                        id={'username'} onChange={(event) => buscar(event.target.value, event.target.id)}
                      />
                  </div>
                  <div
                    className={'form-search d-flex align-items-stretch mb-3'} >
                      <input type={'password'} className={'form-control'} placeholder={'Ingrese su contraseña'} 
                        id={'password'} onChange={(event) => buscar(event.target.value, event.target.id)}
                      />
                  </div>
                  <button type={'submit'} className={'btn btn-primary'} onClick={()=> busqueda()}>
                    Iniciar Sesión
                  </button>
                </section>
                
              </div>

              <div className={'col-lg-5 order-1 order-lg-2 hero-img'} data-aos={'zoom-out'}>
                <img src={usuariopng} className={'img-fluid mb-3 mb-lg-0'} alt={''}/>
              </div>

            </div>
          </div>
        </section>
        <Footer/>
      <ToastContainer />
      </>
  );
  
}

export default Login;
