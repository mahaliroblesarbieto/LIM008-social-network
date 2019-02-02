import {createUserWithEmailAndPassword} from './lib/index.js';
export const signUpOnClick = () => {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  createUserWithEmailAndPassword(email, password);
};
