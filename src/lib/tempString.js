import {signUpOnClick, 
  closedSesion, 
  authenticateFacebook, 
  authenticateWithGoogle, 
  goToRegister, 
  authenticateWithEmailAndPassword,
  publish,
  consultPosts} from '../view_controller.js';
import { consultTypePost, consultPost } from './index.js';
export { objTemp };
const objTemp = {
  login: () => {
    const tmpl = `<section>
    <div class="row backgroundLogin">
      <div class="col-4"></div>
        <div id ="home" class="col-6 col-s-4 border">
          <div class="background-principal">
          <div class="row">
            <div class="col-s-12 col-12">
              <img class="logo" src="img/logoworldpet.jpg" alt="logo worldpet"> 
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-s-12">
              <h1 class = "margin-t">WORLDPET</h1> <h4>Mundo Mascota, todo lo que tu mascota necesita en un solo app.</h4>
            </div> 
          </div>
          <div class="row">
            <div class="col-12 col-s-12">
            <p id= "uncompletedError" class = "errors uncomp"></p>
              <input id="txtEmail" type = "email" class = "border" placeholder="Correo"/>
              <div id = "emailErrorLog" class = "errors"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-s-12">
              <input id="txtPassword" type = "password" class = "border" placeholder="Contraseña"/>
              <div id = "passwordErrorLog" class = "errors"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-s-12">
              <button type = "button" id = "btnLogIn"  class="type logIn border">  Iniciar Sesión</button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-s-12">
              <h4 style="text-align: center;">------------------ ó ------------------</h4>
            </div>
          </div>
          <div class="row ">
            <div class="col-12 col-s-12">
              <button  id="button-facebook" class="type facebook border"><img class = "icon left" src = "img/iconofacebook.png"></img>Continuar con Facebook </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-s-12">
              <button type = "button" id="button-google" class = "type google border"><img class = "icon left" src = "img/iconogoogle.png"></img>Continuar con Google </button>
            </div> 
          </div>
          <div class="row">
            <div class="col-12 col-s-12">
              <h4 style="text-align: center;">Si no tienes una cuenta, puedes crearla dando clic al siguiente botón:</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-s-12">
              <button type = "button" id = "btnSignUp" class = "type create-count border" > Crear Cuenta </button>
            </div>
          </div>
        </div>
        </div>
      <div class="col-4"></div>
    </div>
  </section> `;
    const elem = document.createElement('div');
    elem.innerHTML = tmpl;
    elem.querySelector('#button-facebook').addEventListener('click', authenticateFacebook);
    elem.querySelector('#button-google').addEventListener('click', authenticateWithGoogle);
    elem.querySelector('#btnSignUp').addEventListener('click', goToRegister);
    elem.querySelector('#btnLogIn').addEventListener('click', authenticateWithEmailAndPassword);
    return elem; 
  },
  home: () => {
    const tmpl = 
    `<header class="text type logIn">
      <div class="row" id="title">
        <div class="col-12 col-s-12">
          <div class="col-10 col-s-10">
            <h1>WORLDPET</h1>
          </div>
          <div class="col-2 col-s-2">
            <select class="logIn width" id="closeSesion">
              <option disabled selected></option>
              <option value="true">Cerrar Sesión</option>
            </select>
            <!--<button type = "button" class="type logIn border" id="closeSesion" class = "border"> Cerrar Sesión </button>-->
          </div>
        </div>
      </div>
    </header>
    <section class="text">
      <div class="row">
        <div class="col-12 col-s-12">
          <textarea rows="2" cols="25" id="entered-text" class = "border" placeholder="¿Qué estas pensando?"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-2">
          </div>
          <div class="col-2 col-s-2">
          </div>
          <div class="col-2 col-s-2">
          </div>
          <div class="col-2">
          </div>
          <div class="col-2 col-s-2">
            <select class="type logIn border width" id="post-type">
              <option value="false">Amigos</option>
              <option value="true">Público</option>
            </select>
          </div>
          <div class="col-2">
            <button type = "button" class="type logIn border width" id="button-post"  class = "border"> Publicar </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-s-12">
          <div class="col-2">
            <button type = "button" class="type logIn border width" id="post-public"  class = "border"> Público </button>
          </div>
          <div class="col-2">
            <button type = "button" class="type logIn border width" id="post-friend"  class = "border"> Amigos </button>
          </div>
          <div class="col-2 col-s-2">
            <button type = "button" class="type logIn border width" id="post-all"  class = "border"> Todos </button>
          </div>
          <div class="col-2 col-s-2">
          </div>
          <div class="col-2 col-s-2">
          </div>
          <div class="col-2 col-s-2">
          </div>
        </div>
      </div>
      <div class="row">
        <div id="container-publication" class="col-12 col-s-12">
          <ul class="w-100 demo-list-control mdl-list" id="notes-list">
          </ul>
        </div>
      </div>
    </section>`;
    const elem = document.createElement('div');
    elem.innerHTML = tmpl;
    const btnCloseSesion = elem.querySelector('#closeSesion');
    btnCloseSesion.addEventListener('change', closedSesion);
    const btnPost = elem.querySelector('#button-post');
    btnPost.addEventListener('click', publish);
    const btnPostPublic = elem.querySelector('#post-public');
    btnPostPublic.addEventListener('click', () => {
      consultTypePost('true');
    });
    const btnPostFriend = elem.querySelector('#post-friend');
    btnPostFriend.addEventListener('click', () => {
      consultTypePost('false');
    });
    const btnPostAll = elem.querySelector('#post-all');
    btnPostAll.addEventListener('click', consultPosts);
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
     <p id= "uncompletedError" class = "errors uncomp"></p>
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
      <button type = "button" class="type logIn border" id="signUpUser" class = "border"> Registrar </button>
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
