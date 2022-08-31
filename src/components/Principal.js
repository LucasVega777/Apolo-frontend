import React, { useState, useEffect } from 'react';
import backgroudLogin from '../images/bg-01.jpg'


function Principal({logout}) {
  const [estado, setEstado] = useState(true);
  const doLogout = () => {
    setEstado(true);
    logout();
  }

  const recargar = () =>{
    window.href = '/usuarios';
    setEstado(true);
  }

  useEffect(() => {}, [estado]);

  return (
    <div className={'limiter'}>
      <div className={'container-login100'} style={{'background-image' : `url(${backgroudLogin})`}}>
        <div className={'wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54'}>
          <form className={'login100-form validate-form'} onSubmit={recargar}>
            <span className={'login100-form-title p-b-49'}>
              Menu principal
            </span>
          
            <div className={'wrap-login100-form-btn'}>
              <div className={'login100-form-bgbtn'}></div>
              <button className={'login100-form-btn'} type={'submit'}
                onClick={()=> {window.href='/Apolo-frontend/usuarios'}}>
                Usuarios 
              </button>
            </div>
            <br/>
            <div className={'wrap-login100-form-btn'}>
              <div className={'login100-form-bgbtn'}></div>
              <button className={'login100-form-btn'} type={'submit'} 
               onClick={()=>{ window.href = '/Apolo-frontend/roles'}}>
                Roles 
              </button>
            </div>
            <br/>
            <div className={'wrap-login100-form-btn'}>
              <div className={'login100-form-bgbtn'}></div>
              <button className={'login100-form-btn'} type={'submit'}
                onClick={recargar}>
                Permisos 
              </button>
            </div>
            <br/>
            <div className={'wrap-login100-form-btn'}>
              <div className={'login100-form-bgbtn'}></div>
              <button className={'login100-form-btn'} type={'submit'} 
                onClick={doLogout}>
                Cerrar Sesión 
              </button>
            </div>
          </form>
          </div>
        </div>
    </div>
  );
  }
  
  export default Principal;
  