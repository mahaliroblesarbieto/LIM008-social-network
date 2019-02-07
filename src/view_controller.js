import {authenticateGoogleAccount,
  createUserWithEmailAndPassword,
  authenticateEmailAndPassword,
  authenticateFacebookAccount,
  closeSesion,
  savePublication,
  consultPost,
  deletePost} from './lib/index.js';
import {changeTmp} from './lib/app.js';

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
  const name = document.querySelector('#nombres').value;
  const lastName = document.querySelector('#apellidos').value;
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  if (email === '' || password === '' || name === '' || lastName === '') {
    showUncompletedErrors();
  } else if (email !== '' && password !== '' && name !== '' && lastName !== '') {
    createUserWithEmailAndPassword(email, password)
      .then((data) => saveData(data))
      .catch((error) => showSignErrors(error));
  };
};

export const authenticateWithEmailAndPassword = () => {
  const email = document.querySelector('#txtEmail').value;
  const password = document.querySelector('#txtPassword').value;
  if (email === '' || password === '') {
    showUncompletedErrors();
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
  if (enteredText !== '') {
    savePublication(user, enteredText, postType)
      .then((data) => consultPost(data))
      .catch(error => {
        console.error(`Error creando el post => ${error}`);
      });
  }
};

// export const deletePosting = () => {
//   deletePost(objNote.id)
//     .then(() => { 
//       consultPost();
//       //      abrir una ventana modal que pida confirmar
//       //      imprimir la nueva data en los templates
//       console.log('Es exitoso');
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }