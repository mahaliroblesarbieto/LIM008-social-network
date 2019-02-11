import {signUpOnClick, 
  closedSesion, 
  authenticateFacebook, 
  authenticateWithGoogle, 
  goToRegister, 
  authenticateWithEmailAndPassword,
  publish,
  consultPosts,
  consultTypePosts} from '../view_controller.js';
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
  </section>`;
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
    `<header class="color">
    <div class="row" id="title">
      <div class="col-12 col-s-12 center title">
      <img class = "left" src = "img/menu.png"></img>
      WORLDPET
      </div>
    </div>
  </header>
  <div class="row">
    <div class="col-3">
      <div class="row">
        <div class="col-12">
          <img class="logo width" src="img/logoworldpet.jpg" alt="logo worldpet">
          <p class="name width center">Nombre de Usuario</p>
          <hr/>
          <a id="post-all" type="button" role="button" class = "width font" href="javascript:void(0)">Todas las publicaciones</a>
          <hr/>
          <a id="post-public" type="button" role="button" class = "width font" href="javascript:void(0)">Posts públicos</a>
          <hr/>
          <a id="post-friend" type="button" role="button" class = "width font" href="javascript:void(0)">Posts de amigos</a>
          <hr/>
          <a id="closeSesion" type="button" role="button" class = "width font" href="javascript:void(0)">Cerrar Sesión</a>
          <hr/>
        </div>
      </div>
    </div>
    <div class="col-9 gray">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10 border-post background-principal">
          <textarea rows="2" cols="25" id="entered-text" class = "border col-12" placeholder="¿Qué estas pensando?"></textarea>
          <div class="row">
            <div class="col-8"></div>
            <div class="col-2">
              <select class=" type login border width padding" id="post-type">
                <option value="true">Público</option>
                <option value="false">Amigos</option>
              </select>
            </div>
            <div class="col-2">
              <button type = "button" id="button-post"  class = "type login border width padding"> Publicar </button>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div id="notes-list" class="col-10 col-s-10">
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</div>`;
    const elem = document.createElement('div');
    elem.innerHTML = tmpl;
    const btnCloseSesion = elem.querySelector('#closeSesion');
    btnCloseSesion.addEventListener('change', closedSesion);
    const btnPost = elem.querySelector('#button-post');
    btnPost.addEventListener('click', publish);
    const btnPostPublic = elem.querySelector('#post-public');
    btnPostPublic.addEventListener('click', () => {
      consultTypePosts('true');
    });
    const btnPostFriend = elem.querySelector('#post-friend');
    btnPostFriend.addEventListener('click', () => {
      consultTypePosts('false');
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
          <button type = "button" id="signUpUser" class = "type border registry width padding"> Regístrate </button>
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
