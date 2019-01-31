const createDocumentUID = (id , data) => {
  firebase.firestore().collection('users').doc(id).set({
    id: data.uid,
    dateUser: data.user,
    nameUser: data.email
  });
};
export const authenticateGoogleAccount = () => {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const uid = result.user.uid;
        const user = result.user.displayName;  
        const email = result.user.email;
        createDocumentUID(uid, {uid,user,email});
      }).catch(error => {
        const errorCode = error.code;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          return 'Es el mismo usuario';
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
<<<<<<< HEAD
      .then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;    
        
        console.log(href.location);
=======
      .then(result => {
        const uid = result.user.uid;
        const user = result.user.displayName;  
        const email = result.user.email;

        createDocumentUID(uid, {uid, user, email});
>>>>>>> 94a3706689c18efac9dc80ab37de529945af8400
      }).catch(error => {
        const errorCode = error.code;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          return 'Es el mismo usuario';
        }
      });
  } /*else {
    firebase.auth().signOut();
  }*/
};

const email = document.getElementById('txtEmail');
const password = document.getElementById('txtPassword');

export const createUserWithEmailAndPassword = () => {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const authenticateWithEmailAndPassword = () => {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
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
