<<<<<<< HEAD
import {createUserWithEmailAndPassword} from './lib/index.js';
import { changeTmp } from './lib/app.js';
export const signUpOnClick = () => {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  createUserWithEmailAndPassword(email, password);
  location.hash='#/home';
  changeTmp(location.hash);
};
=======
import {authenticateGoogleAccount,
  createUserWithEmailAndPassword,
  authenticateEmailAndPassword,
  authenticateFacebookAccount} from './lib/index.js';
import {changeTmp} from './lib/app.js';

const email = document.getElementById('txtEmail');
const password = document.getElementById('txtPassword');

export const changeHash = (hash) => {
  location.hash = hash;
  changeTmp(location.hash);
};  

const createDocumentUID = (id, data) => {
  firebase.firestore().collection('users').doc(id).set({
    id: data.uid,
    dateUser: data.user,
    nameUser: data.email
  });
};

const saveData = (data) => {
  const uid = data.user.uid;
  const user = data.user.displayName;
  const email = data.user.email;
  createDocumentUID(uid, {uid, user, email});
  changeHash('#/home');
}; 

export const authenticateWithGoogle = () => {
  authenticateGoogleAccount()
    .then((data) => saveData(data))
    .catch(error => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};

export const goToRegister = () => {
  changeHash('#/registry');
};

export const signUpOnClick = () => {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  if (email === '' || password === '') {
    alert('Complete los datos');
  } else if (email !== '' && password !== '') {
    createUserWithEmailAndPassword(email, password)
      .then((data) => saveData(data))
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
        case 'auth/email-already-in-use':
          document.querySelector('#emailError').innerHTML = 'Correo electrónico ya registrado';
          break;
        case 'auth/invalid-email':
          document.querySelector('#emailError').innerHTML = 'Correo electrónico inválido';
          break;
        case 'auth/weak-password':
          document.querySelector('#passwordError').innerHTML = 'Contraseña debe tener mínimo 6 dígitos';
          break;
        case 'error':
          document.querySelector('#emailError').innerHTML = 'Correo electrónico inválido';
          break;
        }
      });
  }
};

export const authenticateWithEmailAndPassword = () => {
  authenticateEmailAndPassword(email.value, password.value)
    .then((data) => saveData(data))
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
    });
};

export const authenticateFacebook = () => {
  authenticateFacebookAccount()
    .then((data) => saveData(data))
    .catch(error => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        return 'Es el mismo usuario';
      }
    });
};
>>>>>>> cc2818073b736475a9399200f682c250c2618b4b
