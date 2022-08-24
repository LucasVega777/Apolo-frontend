import React, { useState, useEffect } from 'react';

function Login({doLogin}) {
  const [ datosLogin, setDatosLogin ] = useState({
    username: '',
    password: ''
  })

  const manejadorCambios = (event) => {
      setDatosLogin({
          ...datosLogin, 
          [event.target.name] : event.target.value 
      });
  }

  const loggear = (event) => {
      event.preventDefault();
      doLogin(datosLogin);
  }

  return (
    <div className={'limiter'}>
      <div className={'container-login100'} style={{'background-image' : 'url("images/bg-01.jpg")'}}>
        <div className={'wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54'}>
          <form className={'login100-form validate-form'} onSubmit={loggear}>
            <span className={'login100-form-title p-b-49'}>
              Iniciar Sesión
            </span>

            <div className={'wrap-input100 validate-input m-b-23'} data-validate ={'El usuario es requerido'}>
              <span className={'label-input100'}>Usuario</span>
              <input className={'input100'} type={'text'} name={'username'} 
              placeholder={'Escribe tu nombre de usuario'} onChange={manejadorCambios}/>
            </div>

            <div className={'wrap-input100 validate-input" data-validate="La contraseña es requerida'}>
              <span className={'label-input100'}>Contraseña</span>
              <input className={'input100'} type={'password'} name={'password'} 
              placeholder={'Escribe tu contraseña'} onChange={manejadorCambios}/>
            </div>
            
            <div className={'text-right p-t-8 p-b-31'}>
              
            </div>
            

            <div className={'container-login100-form-btn'}>
              <div className={'wrap-login100-form-btn'}>
                <div className={'login100-form-bgbtn'}></div>
                <button className={'login100-form-btn'} type={'submit'} href={'/Apolo-frontend/inicio'}>
                  Ingresar 
                </button>
              </div>
            </div>

            <div className={'txt1 text-center p-t-54 p-b-20'}>
            
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
