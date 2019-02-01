import {changeTmp} from './app.js';

export const createDocumentUID = (id , data) => {
  console.log('create');
  firebase.firestore().collection('users').doc(id).set({
    id: data.uid,
    dateUser: data.user,
    nameUser: data.email
  });
};

export const authenticateGoogleAccount = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user.displayName;
    })
    .catch(error => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};
export const Popup = () =>{
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');
 return firebase.auth().signInWithPopup(provider);
};
export const authenticateFacebookAccount = () => {
  if (!firebase.auth().currentUser) {
    Popup();
    } else {
    firebase.auth().signOut();
  }
};

const email = document.getElementById('emailSignUp');
const password = document.getElementById('passwordSignUp');

export const createUserWithEmailAndPassword = () => {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function(result) {
      const user = result.user;    
    }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const emailLog = document.getElementById('txtEmail');
const passwordLog = document.getElementById('txtPassword');
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

