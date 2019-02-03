import {authenticateGoogleAccount,
  createUserWithEmailAndPassword} from './lib/index.js';
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
      .then(() => {
        changeHash('#/home');
      })
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