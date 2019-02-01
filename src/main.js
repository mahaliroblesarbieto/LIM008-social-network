import { authenticateGoogleAccount,
  authenticateFacebookAccount,
  authenticateWithEmailAndPassword,
  createUserWithEmailAndPassword} 
from './lib/index.js';
import { loginFacebook } from './view_controller.js';
console.log(loginFacebook);
document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
document.getElementById('button-facebook').addEventListener('click',loginFacebook);
const modal = document.getElementById('windowModal');
document.getElementsByClassName('close')[0].addEventListener('click', () => {
  modal.style.display = "none";
});
document.getElementById('btnSignUp').addEventListener('click', () => {
modal.style.display = "block";
});
window.addEventListener('click', (event) =>{
  if(event.target == modal){
    modal.style.display = "none";
  }
});
window.addEventListener('load', () => changeTmp());
if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
document.getElementById('signUpUser').addEventListener('click', createUserWithEmailAndPassword);
document.getElementById('btnLogIn').addEventListener('click',authenticateWithEmailAndPassword);