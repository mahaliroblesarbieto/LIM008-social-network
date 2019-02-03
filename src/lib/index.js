import { changeTmp } from './app.js';


export const changeHash = (hash) => {
  location.hash = hash;
  changeTmp(location.hash);
};

<<<<<<< HEAD
export const authenticateGoogleAccount = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const uid = result.user.uid;
      const user = result.user.displayName;
      const email = result.user.email;
      createDocumentUID(uid, {uid, user, email});
      location.hash = '#/home';
      changeTmp(location.hash);
    })
    .catch(error => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};
export const Popup = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');
 return firebase.auth().signInWithPopup(provider);
};
=======
export const authenticateGoogleAccount = () => 
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider().addScope('https://www.googleapis.com/auth/plus.login'));

export const createUserWithEmailAndPassword = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const authenticateEmailAndPassword = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password);

>>>>>>> cc2818073b736475a9399200f682c250c2618b4b
export const authenticateFacebookAccount = () => {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    return firebase.auth().signInWithPopup(provider);    
  } else {
    firebase.auth().signOut();
  }
};

<<<<<<< HEAD
export const createUserWithEmailAndPassword = (email, password) => {
  location.hash = '#/registry';
  changeTmp(location.hash);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(result) {
      const user = result.user;
      console.log(user);
      location.hash = '#/registry';
      changeTmp(location.hash);
    }).catch(function(error) {
      console.log(error);
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        alert('Correo electrónico ya registrado');
      } else if (errorCode === 'auth/invalid-email') {
        alert('Correo electrónico inválido');
      } 
    });
};

export const authenticateWithEmailAndPassword = () => {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(result => {
      const user = result.user.displayName;
    })
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

=======
>>>>>>> cc2818073b736475a9399200f682c250c2618b4b
export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};