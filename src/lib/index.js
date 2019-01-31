import {changeTmp} from './app.js';

export const authenticateGoogleAccount = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user.displayName;
      // window.addEventListener('load', changeTmp(window.location.hash));
      // if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
    })
    .catch(error => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};

export const authenticateFacebookAccount = () => {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;
        // window.addEventListener('load', changeTmp(window.location.hash));
        // if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);    
      }).catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert('Es el mismo usuario');
        }
      });
  } else {
    firebase.auth().signOut();
  }
};

const email = document.getElementById('txtEmail');
const password = document.getElementById('txtPassword');

export const createUserWithEmailAndPassword = () => {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function(result) {
      const user = result.user;
      // window.addEventListener('load', changeTmp(window.location.hash));
      // if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);    
    }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // window.addEventListener('load', changeTmp(window.location.hash));
      // if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
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

window.addEventListener('load', (evt) => changeTmp() );
if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
