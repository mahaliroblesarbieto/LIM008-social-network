import {initRouter} from './lib/index.js';
import { initFirebase } from './lib/ConfigFireBase.js'

// document.getElementById('button-google').addEventListener('click', authenticateWithGoogle);
// document.getElementById('btnSignUp').addEventListener('click', goToRegister);
// document.getElementById('btnLogIn').addEventListener('click', authenticateWithEmailAndPassword);
// document.getElementById('button-facebook').addEventListener('click', authenticateFacebook);

const init = () => {
  initFirebase();
  initRouter();
}

window.addEventListener('load', init)

