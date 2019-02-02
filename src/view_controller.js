import {createUserWithEmailAndPassword} from './lib/index.js';
import { changeTmp } from './lib/app.js';
export const signUpOnClick = () => {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  createUserWithEmailAndPassword(email, password);
  location.hash = '#/home';
  changeTmp(location.hash);
};