import { authenticateGoogleAccount,
  authenticateFacebookAccount,
  authenticateWithEmailAndPassword,
  createUserWithEmailAndPassword} from './lib/index.js';

document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
document.getElementById('button-facebook').addEventListener('click', authenticateFacebookAccount);
document.getElementById('btnSignUp').addEventListener('click', createUserWithEmailAndPassword);
document.getElementById('btnLogIn').addEventListener('click', authenticateWithEmailAndPassword);


