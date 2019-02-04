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
    const tmpl = ` 
    <div class="background-principal">
      <div class="row">
        <div class="col-s-12 col-12">
          <img class="logo" src="img/logoworldpet.jpg" alt="logo worldpet"> 
        </div>
      </div>
    <form class="border background-principal">
    <div class="row">
    <div class="col-12 col-s-12">
     <h1>Te damos la bienvenida a WorldPet</h1>
    </div>
  </div>
  <div class="row">
              <div class="col-12 col-s-12">
                <h4>Todo lo que tu mascota necesita en un solo app.</h4>
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
      <button type = "button" class="type logIn border" id=signUpUser class = "border"> Registrar </button>
    </div>
  </form>
  </div>
  `;

    const elem = document.createElement('form');
    elem.innerHTML = tmpl;
    const btnSignUp = elem.querySelector('#signUpUser');
    btnSignUp.addEventListener('click', signUpOnClick);
    return elem; 
  }
};