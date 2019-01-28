import { authenticateGoogleAccount } from './lib/index.js';

document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);