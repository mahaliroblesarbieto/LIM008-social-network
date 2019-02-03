import {createUserWithEmailAndPassword} from './lib/index.js';
import { changeTmp } from './lib/app.js';

// se agrego a funcion signUpOnClick then y catch y tambien errores e impresion de ellos en pantalla de registro
// Como limpiar despues de cada interacción
export const signUpOnClick = () => {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  if (email === '' || password === '') {
    alert('Complete los datos');
  } else if (email !== '' && password !== '') {
    createUserWithEmailAndPassword(email, password)
      .then(() => {
        location.hash = '#/home';
        changeTmp(location.hash);
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
        case 'auth/email-already-in-use':
          document.querySelector('#emailError').innerHTML = '';
          document.querySelector('#emailError').innerHTML = 'Correo electrónico ya registrado';
          break;
        case 'auth/invalid-email':
          document.querySelector('#emailError').innerHTML = '';
          document.querySelector('#emailError').innerHTML = 'Correo electrónico inválido';
          break;
        case 'auth/weak-password':
          document.querySelector('#passwordError').innerHTML = '';
          document.querySelector('#passwordError').innerHTML = 'Contraseña debe tener mínimo 6 dígitos';
          break;
        case 'error':
          document.querySelector('#emailError').innerHTML = '';
          document.querySelector('#emailError').innerHTML = 'Correo electrónico inválido';
          break;
        }
      });
  };
};

// Función que dirija el boton crear cuenta al template de registro
export const goToRegister = () => {
  location.hash = '#/registry';
  changeTmp(location.hash);
};
