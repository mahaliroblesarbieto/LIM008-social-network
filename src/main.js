import { authenticateGoogleAccount,
  authenticateFacebookAccount, authenticateWithEmailAndPassword } from './lib/index.js';

import { goToRegister } from './view_controller.js';
import { changeTmp } from './lib/app.js';

document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
document.getElementById('button-facebook').addEventListener('click', authenticateFacebookAccount);

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

