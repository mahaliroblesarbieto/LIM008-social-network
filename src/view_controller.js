import {createUserWithEmailAndPassword} from './lib/index.js';
import { changeTmp } from './lib/app.js';
export const signUpOnClick = () => {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  createUserWithEmailAndPassword(email, password);
  // Dirige a #/home
  // location.hash='#/home';
  // changeTmp(location.hash);
};

// Función que dirija el boton crear cuenta al template de registro
export const goToRegister = () => {
  location.hash = '#/registry';
  changeTmp(location.hash);
};
