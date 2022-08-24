import React, { useState, useEffect } from 'react';

function Usuarios({logout}) {
  const [estado, setEstado] = useState(true);
  const doLogout = () => {
    setEstado(true);
    logout();
  }

  useEffect(() => {}, [estado]);

  return (
    <div className={'limiter'}>
      <h1> ABM de Usuarios </h1>
      <h2 type={'button'}> Cerrar Sesión 
      <a onClick={doLogout}> aqui </a>
      </h2>
    </div>
  );
  }
  
  export default Usuarios;
  