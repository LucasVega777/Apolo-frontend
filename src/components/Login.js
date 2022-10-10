import React, { useState, useEffect } from 'react';
import backgroudLogin from '../images/gb-focos-2.jpg'

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
    <div className={"page-wrapper"}>
        <div className={"page-content--bge5"}>
            <div className={"container"}>
                <div className={"login-wrap"}>
                    <div className={"login-content"}>
                        
                        <div className="login-form">
                            <form onSubmit={loggear}>
                                <div className={"form-group"}>
                                    <label>Username</label>
                                    <input className={"au-input au-input--full"} type={"text"} name={"username"} placeholder={"Username"} onChange={manejadorCambios}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className={"au-input au-input--full"} type={"password"} name={"password"} placeholder={"Password"} onChange={manejadorCambios}/>
                                </div>
                               
                                <button className={"au-btn au-btn--block au-btn--green m-b-20"} type={"submit"} href={'/Apolo-frontend/inicio'}>Iniciar Sesion</button>
                               
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

  );



}

export default Login;
