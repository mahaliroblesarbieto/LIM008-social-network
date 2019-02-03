import {createUserWithEmailAndPassword} from './lib/index.js';
import { changeTmp } from './lib/app.js';

//se agrego a funcion signUpOnClick then y catch 
export const signUpOnClick = () => {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  createUserWithEmailAndPassword(email, password)
    .then(() => {
     location.hash = '#/home';
     changeTmp(location.hash);
    })
    .catch(function(error) {
      console.log(error);
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
       alert('Correo electrónico ya registrado');
      } else if (errorCode === 'auth/invalid-email') {
       alert('Correo electrónico inválido');
      } else {
       alert(error);
      }
    })
};

// Función que dirija el boton crear cuenta al template de registro
export const goToRegister = () => {
  location.hash = '#/registry';
  changeTmp(location.hash);
};
