import {authenticateWithGoogle,
  goToRegister} from './view_controller.js';

document.getElementById('button-google').addEventListener('click', authenticateWithGoogle);
document.getElementById('btnSignUp').addEventListener('click', goToRegister);


