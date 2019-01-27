// import myFunction from './lib/index.js';
// myFunction();
// Obtener los elementos
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogIn = document.getElementById('btnLogIn');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogOut = document.getElementById('btnLogOut');
const auth = firebase.auth();

// Hacer evento login
btnLogIn.addEventListener('click', e => {
  auth;
  const promise = auth.signInWithEmailAndPassword(txtEmail.value,txtPassword.value);
promise.catch(e => console.log(e.message));
});

// Creando cuenta
// TO DO: Verificarq ue sea un correo real
btnSignUp.addEventListener('click', e => {
 auth;
const promise = auth.createUserWithEmailAndPassword(txtEmail.value,txtPassword.value);
promise.catch(e => console.log(e.message));
});

// Agregando un listener en tiempo real
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
  } else {
    console.log('not logged in');
  }
});

