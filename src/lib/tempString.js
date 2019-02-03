import {signUpOnClick} from '../view_controller.js';
export { objTemp };
const objTemp = {
  home: () => {
    const tmpl = `<h3 id ="principal"> Bienvenido
    </h3>`;
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
    <div class="col-12 col-s-12 regist">
     <input id="emailSignUp" type = "email" class = "border" placeholder=" Correo"/>
     <div id = "emailError" class = "errors"></div>
    </div>
  </div>
  <div class="row">
    <div class="pass col-12 col-s-12 regist ">
     <input id="passwordSignUp" type = "password" class = "border" placeholder=" Contraseña"/>
     <div id = "passwordError" class = "errors"></div>
     </div>
  </div>
  <div class="row">
    <div class="col-12 col-s-12">
      <button class="type logIn border" id=signUpUser class = "border"> Registrar </button>
    </div>
<<<<<<< HEAD
    <div class="row">
      <div class="col-12 col-s-12">
        <a class="type" id=signUpUser class = "border">
          <div class="type logIn border">Registrar</div>
        </a>
      </div>
    </div>`;

=======
  </div>`;
    
>>>>>>> cc2818073b736475a9399200f682c250c2618b4b
    const elem = document.createElement('form');
    elem.innerHTML = tmpl;
    const btnSignUp = elem.querySelector('#signUpUser');
    btnSignUp.addEventListener('click', signUpOnClick);
    return elem;
  }
 
};