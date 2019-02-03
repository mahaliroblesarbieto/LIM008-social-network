import {changeTmp} from './app.js';
export const createDocumentUID = (id, data) => {
  console.log('create');
  firebase.firestore().collection('users').doc(id).set({
    id: data.uid,
    dateUser: data.user,
    nameUser: data.email
  });
  location.hash = '#/home';
  changeTmp(location.hash);
};

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
export const authenticateFacebookAccount = () => {
  console.log('sandra');
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        const uid = result.user.uid;
        const user = result.user.displayName;
        const email = result.user.email;
        // createDocumentUID(uid, {uid, user, email});
        location.hash = '#/home';
        changeTmp(location.hash);
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

export const createUserWithEmailAndPassword = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const authenticateWithEmailAndPassword = (email, password) => {
  console.log('hola');
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log('hola');
      const user = result.user.displayName;
    })
    // .catch(function(error) {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   if (errorCode === 'auth/wrong-password') {
    //     alert('Wrong password.');
    //   } else {
    //     alert(errorMessage);
    //   }
    //   console.log(error);
    // });
};


