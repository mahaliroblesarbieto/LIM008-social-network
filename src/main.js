import { authenticateGoogleAccount,
  authenticateFacebookAccount } from './lib/index.js';

document.getElementById('button-google').addEventListener('click', authenticateGoogleAccount);
document.getElementById('button-facebook').addEventListener('click', authenticateFacebookAccount);
