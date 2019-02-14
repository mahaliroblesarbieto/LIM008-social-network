import {signUpOnClick, 
  closedSesion, 
  authenticateFacebook, 
  authenticateWithGoogle, 
  goToRegister, 
  authenticateWithEmailAndPassword,
  publish,
  consultPosts,
  consultTypePosts,
  showHide} from '../viewController.js';
export { objTemp };
const objTemp = {
  login: () => {
    const tmpl = `
    <section>
       <div class="row ">
          <div class="col-4"></div>
          <div id ="home" class="col-4">
             <div class="background-principal border">
                <div class="row">
                   <div class="col-s-12 col-12">
                      <img class="logo" src="img/logoworldpet.jpg" alt="logo worldpet">
                      <h1 class = "center fredoka">WORLDPET</h1>
                      <h4 class = "center">Accede a la mayor red social para amantes de las mascotas.</h4>
                      <p id= "uncompletedError" class = "errors background-principal"></p>
                      <input id="txtEmail" type = "email" class = "border width padding background-principal" placeholder="Correo"/>
                      <div id = "emailErrorLog" class = "errors background-principal"></div>
                      <input id="txtPassword" type = "password" class = "border width padding background-principal" placeholder="Contraseña"/>
                      <div id = "passwordErrorLog" class = "errors background-principal"></div>
                      <button type = "button" id = "btnLogIn"  class="type login border width padding box-shadow">  Iniciar Sesión</button>
                      <h4 class="center">------------------ ó ------------------</h4>
                      <button  id="button-facebook" class="type facebook border width padding box-shadow"><img class = "icon left background-principal" src = "img/iconofacebook.png" alt="logo facebook">Continuar con Facebook </button>
                      <div class = "errors background-principal"></div>
                      <button type = "button" id="button-google" class = "type google border width padding box-shadow"><img class = "icon left background-principal" src = "img/iconogoogle.png" alt="logo google">Continuar con Google </button>
                      <h4 class="center">Si no tienes una cuenta, puedes crearla dando clic a:</h4>
                      <button type = "button" id = "btnSignUp" class = "type create-count border width padding background-principal box-shadow" > Crear una Cuenta </button>
                   </div>
                </div>
             </div>
          </div>
          <div class="col-4" ></div>
       </div>
    </section>`;
    document.getElementById('body').classList.add('backgroundLogin');
    const elem = document.createElement('div');
    elem.innerHTML = tmpl;
    elem.querySelector('#button-facebook').addEventListener('click', authenticateFacebook);
    elem.querySelector('#button-google').addEventListener('click', authenticateWithGoogle);
    elem.querySelector('#btnSignUp').addEventListener('click', goToRegister);
    elem.querySelector('#btnLogIn').addEventListener('click', authenticateWithEmailAndPassword);
    return elem; 
  },
  home: () => {
    const tmpl = `
    <header class="registry headerfijo width">
      <div class="row" id="title">
          <div class="col-12 col-s-12 center title fredoka">
            <img id ="menu" class = "left" src = "img/menu.png"></img>
            <h1 class = "fredoka">WORLDPET</h1>
          </div>
      </div>
    </header>
    <div class="row col-12"></div>
    <div class="row">
      <div class="col-3 ocultar" id="contenidolateral">
        <div class="row">
          <div class="col-12 col-sm-12">
            <hr/>
            <a id="post-all" type="button"  class = "width container" href="javascript:void(0)">Todas las publicaciones</a>
            <hr/>
            <a id="post-public" type="button"  class = "width container" href="javascript:void(0)">Posts públicos</a>
            <hr/>
            <a id="post-friend" type="button"  class = "width container" href="javascript:void(0)">Posts de amigos</a>
            <hr/>
            <a id="closeSesion" type="button"  class = "width container" href="javascript:void(0)">Cerrar Sesión</a>   <i class="fas fa-sign-out-alt"></i>
            <hr/>
          </div>
        </div>
      </div>
      <div class="col-9 gray">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-12 border-post background-principal box-shadow">
            <textarea rows="2" cols="25" id="entered-text" class = "border col-12 width" placeholder="¿Qué estas pensando?"></textarea>
            <div class="row">
              <div class="col-6 col-s-6 xscol-2" ></div>
              <div class="col-3 col-s-3 xscol-5" >
                <select class="select-post background-principal width" id="post-type">
                  <option value="true">Público</option>
                  <option value="false">Amigos</option>
                </select>
              </div>
              <div class="col-3 col-s-3 xscol-5 right">
                <button type = "button" id="button-post"  class = "login width btn-post box-shadow"> Publicar </button>
              </div>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
        <div class="row">
          <div class="col-1"></div>
          <div id="notes-list" class="xscol-12">
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </div>
  </div>`;
    document.getElementById('body').classList.remove('backgroundLogin');
    const elem = document.createElement('div');
    elem.innerHTML = tmpl;
    const btnCloseSesion = elem.querySelector('#closeSesion');
    btnCloseSesion.addEventListener('click', closedSesion);
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
    const btnMenu = elem.querySelector('#menu');
    btnMenu.addEventListener('click', () => { 
      showHide('contenidolateral');
    });
    return elem;
  },
  registry: () => {
    const tmpl = `
    <div class="background-principal">
      <div class="row">
        <div class="col-s-12 col-12">
          <img class="logo" src="img/logoworldpet.jpg" alt="logo worldpet"> 
          <h1 class = "center fredoka">Regístrate para ver más</h1>
          <h4 class = "center">Accede a la mayor red social para amantes de mascotas con una cuenta gratuita</h4>
          <div class="col-s-12 col-12">
          <p id= "uncompletedError" class = "errors background-principal"></p>
          <input type="text" id="nombres" class = "border width padding background-principal" placeholder = " Ingresa tus nombres"></input>
          <div class = "errors background-principal"></div>
          </div>
          <div class="col-s-12 col-12">
          <input type="text" id="apellidos" class = "border width padding background-principal" placeholder = " Ingresa tus apellidos"></input>
          <div class = "errors background-principal"></div>
          </div>
          <div "col-s-12 col-12"></div>
          <div class="col-s-12 col-12">
          <input id="emailSignUp" type = "email" class = "border width padding background-principal" placeholder=" Correo"/>
          <div id = "emailError" class = "errors background-principal"></div>
          </div>
          <div class="col-s-12 col-12">
          <input id="passwordSignUp" type = "password" class = "border width padding background-principal" placeholder="Crea una contraseña"/>
          <div id = "passwordError" class = "errors background-principal"></div>
          </div>
          <div class="col-s-12 col-12">
          <button type = "button" id="signUpUser" class = "type border registry width padding box-shadow"> Regístrate </button>
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

