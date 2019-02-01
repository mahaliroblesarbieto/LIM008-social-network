import { authenticateGoogleAccount,
  authenticateFacebookAccount,
  authenticateWithEmailAndPassword,
  createUserWithEmailAndPassword} from './lib/index.js';
// import { signUp } from './signUp.js';
import {objTemp} from './tempString.js';
import {viewTmp} from './app.js';
// document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
// document.getElementById('button-facebook').addEventListener('click', authenticateFacebookAccount);
// const modal = document.getElementById('windowModal');
// document.getElementsByClassName('close')[0].addEventListener('click', () => {
//   modal.style.display = 'none';
// });
// document.getElementById('btnSignUp').addEventListener('click', () => {
//   modal.style.display = 'block';
// });
// window.addEventListener('click', (event) => {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// });
// DOM para createUser
const emailSign = document.getElementById('emailSignUp');
const passwordSign = document.getElementById('passwordSignUp');

// const createUserOnSubmit = () =>{
//   const nombre =  objTemp.registry.elem.
// }
// document.getElementById('signUpUser').addEventListener('click', () => {
//   createUserWithEmailAndPassword(emailSign.value, passwordSign.value);
// });

const emailLog = document.getElementById('txtEmail');
const passwordLog = document.getElementById('txtPassword');
// document.getElementById('btnLogIn').addEventListener('click', authenticateWithEmailAndPassword(emailLog.value, passwordLog.value));


// document.getElementById('btnLogIn').addEventListener('click', viewTmp());
// document.getElementById('btnSignUp').addEventListener('click', viewTmp());

export const signUpOnSubmit = () => {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  createUserWithEmailAndPassword(email, password);
};
