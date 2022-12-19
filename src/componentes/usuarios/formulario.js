import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutaciones";
import swal from 'sweetalert';


export default function FRMusuario() {
    const [usuario, setUsuario] = useState({'idUser': '', 'name': '', 'password': ''})
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
    
    const handler = async(str, id) => {
        if (id=='name'){
          if (str.length === 0) {
            setUsuario({
                idUser: usuario.idUser,
                name : '',
                password : usuario.password 
            })
            return;
          }
          setUsuario({
            idUser: usuario.idUser,
                name : str,
                password : usuario.password 
            }
          );
        } else  if (id=='password'){
            if (str.length === 0) {
              setUsuario({
                  idUser: usuario.idUser,
                  name : usuario.name,
                  password : '' 
              })
              return;
            }
            setUsuario({
              idUser: usuario.idUser,
                  name : usuario.name,
                  password : str
              }
            );
        } else  if (id=='idUser'){
            if (str.length === 0) {
              setUsuario({
                  idUser: '',
                  name : usuario.name,
                  password : usuario.password 
              })
              return;
            }
            setUsuario({
                idUser: str,
                name : usuario.name,
                password : usuario.password 
              }
            );
          }
        
    }

    const guardar = async() => {
        try{
            await createUser({
                variables: {
                    "input": {
                    "user": {
                        "password": usuario.password,
                        "name": usuario.name,
                        "idUser": +usuario.idUser,
                    }
                    }
                }
            })
            
            await swal({
                title: "Exito!",
                text: "Has creado el usuario correctamente",
                icon: "success",
            });
            window.location.reload(false);
        } catch (e){
            console.log(e)
            swal({
                title: "Error!",
                text: "Ocurrio un error inesperado",
                icon: "error",
              });
        }
    }

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="row gy-4 mt-4">
                <div class="col-lg-4">

                    <div class="info-item d-flex">
                    <i class="bi bi-person-square flex-shrink-0"></i>
                    <div>
                        <h4>ID:</h4>
                        <p>{usuario.idUser}</p>
                    </div>
                    </div>

                    <div class="info-item d-flex">
                    <i class="bi bi-card-heading flex-shrink-0"></i>
                    <div>
                        <h4>Nombre:</h4>
                        <p>{usuario.name}</p>
                    </div>
                    </div>

                    <div class="info-item d-flex">
                    <i class="bi bi-people flex-shrink-0"></i>
                    <div>
                        <h4>Roles:</h4>
                        <p> Aun falta implementar</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <form  method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="col-md-6 form-group">
                        <input type="integer" name="idUser" className="form-control" id="idUser" 
                        placeholder="Ingresa un id de Usuario" required onChange={(event) => handler(event.target.value, event.target.id)}/>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="text" className="form-control" name="name" id="name" 
                        placeholder="Ingrese su nombre de Usuario" required onChange={(event) => handler(event.target.value, event.target.id)}/>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="password" className="form-control" name="password" id="password" 
                        placeholder="Ingrese su contraseña" required onChange={(event) => handler(event.target.value, event.target.id)}/>
                    </div>
                    <div className="my-3">
                        <div className="loading">Cargando...</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Usuario creado exitosamente</div>
                    </div>
                    <div className="text-center"><button type="button" onClick={()=> {
                        guardar()
                    }}>Guardar</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
    )
    
}
