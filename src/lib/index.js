// // aqui exportaras las funciones que necesites








































const email = document.getElementById('txtEmail');
const password = document.getElementById('txtPassword');

export const createUserWithEmailAndPassword = () => {
  firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      })
    };

export const authenticateWithEmailAndPassword = () => {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
})
};

