import React, { useState, useEffect } from 'react';


function Principal(props) {
  // const [estado, setEstado] = useState(true);
  // const doLogout = () => {
  //   setEstado(true);
  //   logout();
  // }

  // const recargar = () =>{
  //   window.href = '/usuarios';
  //   setEstado(true);
  // }

  // useEffect(() => {}, [estado]);

  console.log("PROPS: ", props);
  // Se estalece el estado incial de las 
  // variables a insertar.

  const initialState = {
      variables: {
          input: {
              rule: {
                idRol: 0,
                descripcion: ""
              }
          }
      }
  }

  // iniciaización de variables.
  const [state, setState] = useState(initialState)

  const handleChange = (event) => {
      setState(event)
  }


  return (
      <div>
        <p>HOLA BIENVENIDO</p>
      </div>
  );
  }
  
  export default Principal;
  