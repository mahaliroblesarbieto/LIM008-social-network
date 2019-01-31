import { authenticateGoogleAccount,
  authenticateFacebookAccount,
  authenticateWithEmailAndPassword,
  createUserWithEmailAndPassword} from './lib/index.js';

import { changeTmp } from './app.js';

document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
document.getElementById('button-facebook').addEventListener('click', authenticateFacebookAccount);
// DOM pantalla modal
const modal = document.getElementById('windowModal');
document.getElementsByClassName('close')[0].addEventListener('click', () => {
  modal.style.display = 'none';
});
document.getElementById('btnSignUp').addEventListener('click', () => {
  modal.style.display = 'block';
});
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
// DOM para createUser
const emailSign = document.getElementById('emailSignUp');
const passwordSign = document.getElementById('passwordSignUp');

document.getElementById('signUpUser').addEventListener('click', () => {
  createUserWithEmailAndPassword(emailSign.value, passwordSign.value);
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
});
// DOM para inicio de sesión
const emailLog = document.getElementById('txtEmail');
const passwordLog = document.getElementById('txtPassword');

document.getElementById('btnLogIn').addEventListener('click', () =>{
  authenticateWithEmailAndPassword(emailLog.value, passwordLog.value);
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
 });
