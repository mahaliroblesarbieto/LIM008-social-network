import {authenticateGoogleAccount,
  createUserWithEmailAndPassword,
  authenticateEmailAndPassword,
  authenticateFacebookAccount,
  closeSesion,
  savePublication,
  consultPost} from './lib/index.js';
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

export const closedSesion = () => {
  closeSesion()
    .then(() => {
      changeHash('');
    })
    .catch();
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
  console.log('paso');
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  if (email === '' || password === '') {
    alert('Complete los datos');
  } else if (email !== '' && password !== '') {
    console.log('paso2');
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
  } else {
    console.log('este es el problema');
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

const showSignErrors = (error) => {
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
  default: document.querySelector('#emailError').innerHTML = '';
  }  
};

const showLogErrors = (error) => {
  const errorCode = error.code;
  switch (errorCode) {
  case 'auth/invalid-email':
    document.querySelector('#emailErrorLog').innerHTML = 'Correo electrónico inválido';
    break;
  case 'auth/user-not-found':
    document.querySelector('#emailErrorLog').innerHTML = 'Usuario no registrado';
    break;
  case 'auth/user-disabled':
    document.querySelector('#emailErrorLog').innerHTML = 'Correo electrónico deshabilitado';
    break;
  case 'auth/wrong-password':
    document.querySelector('#passwordErrorLog').innerHTML = 'Contraseña incorrecta';
    break;
  }
};

const showUncompletedErrors = () => document.querySelector('#uncompletedError').innerHTML = '<img id="iconUn" class="alert" src = "img/icon.png"/>' + 'Complete los campos requeridos';

export const publish = () => {
  const user = firebase.auth().currentUser.displayName;
  const enteredText = document.querySelector('#entered-text').value;
  const postType = document.querySelector('#post-type').value;
  console.log(enteredText);
  console.log(user);
  console.log(postType);
  savePublication(user, enteredText, postType)
    .then((data) => consultPost(data))
    .catch(error => {
      console.error(`Error creando el post => ${error}`);
    });
};

