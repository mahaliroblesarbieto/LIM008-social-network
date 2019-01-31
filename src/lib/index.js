


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


export const createUserWithEmailAndPassword = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  // .then(function(result) {

    // })
    .catch(function(error) {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        return 'Correo electrónico ya registrado';
      } else if (errorCode === 'auth/invalid-email') {
        return 'Correo electrónico inválido';
      } 
    });
};


export const authenticateWithEmailAndPassword = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
//   window.addEventListener('load', changeTmp(window.location.hash));
// if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
// .then
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
