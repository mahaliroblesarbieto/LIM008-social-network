// Este es el punto de entrada de tu aplicacion
import { authenticateGoogleAccount } from './lib/index.js';

document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
// myFunction();