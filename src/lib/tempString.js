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
        <a class="type" id=signUpUser class = "border">
          <div class="type logIn border">Registrar</div>
        </a>
      </div>
    </div>`;

    const elem = document.createElement('div');
    elem.innerHTML = tmpl;

    const btnOnClick = () => {
      alert('interactivo!!!!!!');
      window.location.hash = '#/home';
    };

    const btn = elem.querySelector('#signUpUser');
    btn.addEventListener('click', btnOnClick);
    return elem;
  }
};