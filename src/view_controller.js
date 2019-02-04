import {authenticateGoogleAccount,
  createUserWithEmailAndPassword,
  authenticateEmailAndPassword,
  authenticateFacebookAccount} from './lib/index.js';
import {changeTmp} from './lib/app.js';
import { showLogErrors, showSignErrors, showUncompletedErrors } from './catchErrors.js';

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
  const name = document.querySelector('#nombres').value;
  const lastName = document.querySelector('#apellidos').value;
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  if (email === '' || password === '' || name === '' || lastName === '') {
    // document.querySelector('#uncompletedError').innerHTML = '<img id="iconUn" class="alert" src = "img/icon.png"/>' + 'Complete los campos requeridos';
    showUncompletedErrors();
  } else if (email !== '' && password !== '' && name !== '' && lastName !== '') {
    createUserWithEmailAndPassword(email, password)
      .then((data) => saveData(data))
      .catch((error) => showSignErrors(error));
  };
};

export const authenticateWithEmailAndPassword = () => {
  const email = document.getElementById('txtEmail').value;
  const password = document.getElementById('txtPassword').value;
  if (email === '' || password === '') {
    document.querySelector('#unErrorLog').innerHTML = '<img id="iconUn" class="alert" src = "img/icon.png"/>' + 'Complete los campos requeridos';
  } else if (email !== '' && password !== '') {
    authenticateEmailAndPassword(email, password)
      .then((data) => saveData(data))
      .catch((error) => showLogErrors(error));
  };
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

