// import { createUserWithEmailAndPassword, authenticateWithEmailAndPassword } from './index.js';
// export const signUpOnClick = () => {
//   const email = document.querySelector('#emailSignUp').value;
//   const password = document.querySelector('#passwordSignUp').value;
//   createUserWithEmailAndPassword(email, password);
// };

//   const email = document.getElementById('txtEmail').value;
//   const password = document.getElementById('txtPassword').value;
//   authenticateWithEmailAndPassword(email, password);


// document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
// document.getElementById('button-facebook').addEventListener('click', authenticateFacebookAccount);
document.getElementById('btnSignUp').addEventListener('click', signUpOnClick);
import {
  createUserWithEmailAndPassword} from './index.js';
  export const signUpOnClick = () => {
    const email = document.querySelector('#emailSignUp').value;
    const password = document.querySelector('#passwordSignUp').value;
    createUserWithEmailAndPassword(email,password);
  }; 