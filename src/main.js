import {authenticateWithGoogle,
  goToRegister} from './view_controller.js';
import {authenticateWithEmailAndPassword} from './lib/index.js';
document.getElementById('button-google').addEventListener('click', authenticateWithGoogle);

// DOM de boton para realizar boton gotoRegister
document.getElementById('btnSignUp').addEventListener('click', goToRegister);


const email = document.getElementById('txtEmail').value;
const password = document.getElementById('txtPassword').value;

// Dom de boton para realizar authenticate
// const goToHome = () => {
//   location.hash = '#/home';
//   changeTmp(location.hash);
// }

document.getElementById('btnLogIn').addEventListener('click', authenticateWithEmailAndPassword(email, password));

