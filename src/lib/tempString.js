// 
import {signUpOnSubmit} from '../main.js';
export { objTemp };
const objTemp = {
  mainPage: () => {
    const tmpl = `<section>
    <div class="row">
      <div class="col-s-12 col-12">
          <div class="img-logo">
            <img class="logo" src="img/icono-principal.jpg" alt="logo worldpet">
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-s-12">
        <h3 class = "margin-t" >PETLOVER</h3>
      </div>
    </div>
    <div class="row">
       <div class="col-12 col-s-12">
        <input id="txtEmail" type = "email" class = "border" placeholder="Correo"/>
       </div>
       </div>
    <div class="row">
      <div class="col-12 col-s-12">
        <input id="txtPassword" type = "current-password" class = "border" placeholder="Contraseña"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-s-12">
        <a id = "btnLogIn" class="type logIn border" href="#/home">Iniciar Sesión</a>
      </div>
    </div>
    <div class="row margin-t">
      <div class="col-12 col-s-12">
        <a  id="button-facebook" href="#/home" class="type facebook border"><!--<img class = "icon" src = "img/facebook.png"></img>-->  Continuar con Facebook</a>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-s-12">
        <a  id="button-google"  href="#/home">
         <div class="type google border">
             <!--<img class = "icon" src = "img/search.png"></img>-->  Continuar con Google 
         </div>
       </a>
      </div> 
    </div>
    <div class="row margin-t">
      <div class="col-12 col-s-12">
        <a id = "btnSignUp" href="#/registry" class="type border create-count"> Crear Cuenta</a>
      </div>
    </div>
  </section>`;

    const elem = document.createElement('form');
    elem.innerHTML = tmpl;
    return elem;
  },

  home: () => {
    const tmpl = `<p> Bienvenido </p>`;
    const elem = document.createElement('div');
    elem.innerHTML = tmpl;
    return elem;
  },
  registry: () => {
    const tmpl = `<div class="row">
      <div class="col-12 col-s-12">
       <h3>Te damos la bienvenida a Petlover</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-s-12">
       <input type="text" id="nombres" class = "border" placeholder = " Ingresa tus nombres"></input>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-s-12">
       <input type="text" id="apellidos" class = "border" placeholder = " Ingresa tus apellidos"></input>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-s-12">
       <input id="emailSignUp" type = "email" class = "border" placeholder=" Correo"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-s-12">
       <input id="passwordSignUp" type = "password" class = "border" placeholder=" Contraseña"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-s-12">
        <button type="button" class="type" id="signUpUser"  class="type logIn border">Registrar</button>
      </div>
    </div>`;
    
    const elem = document.createElement('form');
    elem.innerHTML = tmpl;
    const btnSignUp = elem.querySelector('#signUpUser');
    btnSignUp.addEventListener('click', signUpOnSubmit);
    return elem;
  }
};
