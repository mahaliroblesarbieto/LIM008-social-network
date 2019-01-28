




import { authenticateWithEmailAndPassword, createUserWithEmailAndPassword }  from './lib/index.js';
// Obtener los elementos
const btnLogIn = document.getElementById('btnLogIn');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogOut = document.getElementById('btnLogOut');

btnSignUp.addEventListener('click', createUserWithEmailAndPassword);
btnLogIn.addEventListener('click', authenticateWithEmailAndPassword);



