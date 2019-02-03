import { changeTmp } from './app.js';


export const changeHash = (hash) => {
  location.hash = hash;
  changeTmp(location.hash);
};

export const authenticateGoogleAccount = () => 
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider().addScope('https://www.googleapis.com/auth/plus.login'));

export const createUserWithEmailAndPassword = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
  
export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};

export const authenticateWithEmailAndPassword = (email, password) => {
  console.log('hola');
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log('hola');
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