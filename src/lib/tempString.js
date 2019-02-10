import {signUpOnClick, 
  closedSesion, 
  authenticateFacebook, 
  authenticateWithGoogle, 
  goToRegister, 
  authenticateWithEmailAndPassword,
  publish} from '../view_controller.js';
import { consultTypePost } from './index.js';
export { objTemp };
const objTemp = {
  login: () => {
    const tmpl = `<section>
    <div class="row ">
      <div class="col-4"></div>
      <div id ="home" class="col-4">
        <div class="background-principal border">
          <div class="row">
            <div class="col-s-12 col-12">
              <img class="logo" src="img/logoworldpet.jpg" alt="logo worldpet"> 
              <h1 class = "center">WORLDPET</h1> <h4 class = "center">Accede a la mayor red social para amantes de las mascotas.</h4>
              <p id= "uncompletedError" class = "errors"></p>
              <input id="txtEmail" type = "email" class = "border width padding" placeholder="Correo"/>
              <div id = "emailErrorLog" class = "errors"></div>
              <input id="txtPassword" type = "password" class = "border width padding" placeholder="Contraseña"/>
              <div id = "passwordErrorLog" class = "errors"></div>
              <button type = "button" id = "btnLogIn"  class="type login border width padding">  Iniciar Sesión</button>
              <h4 class="center">------------------ ó ------------------</h4>
              <button  id="button-facebook" class="type facebook border width padding"><img class = "icon left" src = "img/iconofacebook.png"></img>Continuar con Facebook </button>
              <h6 style="text-align: center;"> </h6>
              <button type = "button" id="button-google" class = "type google border width padding"><img class = "icon left" src = "img/iconogoogle.png"></img>Continuar con Google </button>
              <h4 class="center">Si no tienes una cuenta, puedes crearla dando clic a:</h4>
              <button type = "button" id = "btnSignUp" class = "type create-count border width padding" > Crear una Cuenta </button
            </div>
          </div>
        </div>
      </div>
      <div class="col-4" ></div>
    </div>
  </section> `;
    document.getElementById('body').classList.add('backgroundLogin');
    // https://uniwebsidad.com/foro/pregunta/445/como-se-puede-cambiar-la-clase-css-de-un-elemento-mediante-javascript/?from=librosweb
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
    `<header class="col-12 col-s-12 background">
        <h1>WORLDPET</h1><img class="rigth" src="img/menu.png" alt="logo worldpet">
    </header>
</div>
    <aside>
      <ul>
        <li>
          <a id="closeSesion">Cerrar Sesión</a>
        </li>
      </ul>
    </aside>
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

    document.getElementById("body").classList.remove('backgroundLogin');
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
    return elem;
  },
  registry: () => {
    const tmpl = `
    <div class="background-principal">
      <div class="row">
        <div class="col-s-12 col-12">
          <img class="logo" src="img/logoworldpet.jpg" alt="logo worldpet"> 
          <h1 class = "center">Regístrate para ver más</h1>
          <h4 class = "center">Accede a la mayor red social para amantes de mascotas con una cuenta gratuita</h4>
          <div class="col-s-12 col-12">
          <p id= "uncompletedError" class = "errors"></p>
          <input type="text" id="nombres" class = "border width padding" placeholder = " Ingresa tus nombres"></input>
          <div class = "errors"></div>
          </div>
          <div class="col-s-12 col-12">
          <input type="text" id="apellidos" class = "border width padding" placeholder = " Ingresa tus apellidos"></input>
          <div class = "errors"></div>
          </div>
          <div "col-s-12 col-12"></div>
          <div class="col-s-12 col-12">
          <input id="emailSignUp" type = "email" class = "border width padding" placeholder=" Correo"/>
          <div id = "emailError" class = "errors"></div>
          </div>
          <div class="col-s-12 col-12">
          <input id="passwordSignUp" type = "password" class = "border width padding" placeholder="Crea una contraseña"/>
          <div id = "passwordError" class = "errors"></div>
          </div>
          <div class="col-s-12 col-12">
          <button type = "button" id="signUpUser" class = "type login border width padding"> Regístrate </button>
          </div>
        </div>
      </div>
    </div>`;

    const elem = document.createElement('form');
    elem.innerHTML = tmpl;
    const btnSignUp = elem.querySelector('#signUpUser');
    btnSignUp.addEventListener('click', signUpOnClick);
    return elem; 
  }
};
