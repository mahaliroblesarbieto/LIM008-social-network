export const authenticateGoogleAccount = () => {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
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

export const authenticateFacebookAccount = () => {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;    
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

const email = document.getElementById('emailSignUp');
const password = document.getElementById('passwordSignUp');

export const createUserWithEmailAndPassword = () => {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const emailLog = document.getElementById('txtEmail');
const passwordLog = document.getElementById('txtPassword');
export const authenticateWithEmailAndPassword = () => {
  firebase.auth().signInWithEmailAndPassword(emailLog.value, passwordLog.value)
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
