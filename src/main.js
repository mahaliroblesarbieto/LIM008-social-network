import { authenticateGoogleAccount,
  authenticateFacebookAccount,
  authenticateWithEmailAndPassword } from './lib/index.js';

import { goToRegister } from './view_controller.js';

document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
document.getElementById('button-facebook').addEventListener('click', authenticateFacebookAccount);
document.getElementById('btnLogIn').addEventListener('click', authenticateWithEmailAndPassword);

// DOM de boton para realizar boton gotoRegister
document.getElementById('btnSignUp').addEventListener('click', goToRegister);

