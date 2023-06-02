import React from 'react';
import './Login.css';
import logo_login from '../assets/logo_login.png';

const Login = () => {


  return (
    <div>
      <br></br>
      <div class="container animacion-carga">
        <div class="jumbotron">
          <div class="formulario">
            <form>
            <img id="logo_login" src={logo_login} alt="Logo Countrle Login" />
             <br></br><br></br>
             <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1"><i class="fa-solid fa-envelope"></i> Correo electrónico</label>
                <input type="email" id="form2Example1" class="form-control" />
              </div>


              <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2"><i class="fa-solid fa-lock"></i> Contraseña</label>
                <input type="password" id="form2Example2" class="form-control" />
              </div>


              <div class="row mb-4">
                <div class="col d-flex justify-content-center">

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="checkbox" />
                    <label class="form-check-label" for="checkbox"> Recuérdame </label>
                  </div>
                </div>
              </div>


              <button type="button" class="btn btn-primary btn-block mb-4"><i class="fa-solid fa-right-to-bracket"></i>&nbsp; Iniciar Sesión</button>


              <div class="text-center">
                <p>¿No estás registrado? <a href="/registro">Registrarse</a></p>
              </div>
            </form>
          </div>

        </div>

      </div>

    </div>

  );
};

export default Login;
