import { authenticateGoogleAccount,
  authenticateWithEmailAndPassword,
  createUserWithEmailAndPassword} from './lib/index.js';
import { authenticateFacebook } from './view_controller.js';

document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
document.getElementById('button-facebook').addEventListener('click', authenticateFacebook);
document.getElementById('btnSignUp').addEventListener('click', createUserWithEmailAndPassword);
document.getElementById('btnLogIn').addEventListener('click', authenticateWithEmailAndPassword);


