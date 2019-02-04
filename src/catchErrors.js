export const showSignErrors = (error) => {
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
  default: document.querySelector('#emailError').innerHTML = '';
  }  
};
export const showLogErrors = (error) => {
  const errorCode = error.code;
  switch (errorCode) {
  case 'auth/invalid-email':
    document.querySelector('#emailErrorLog').innerHTML = 'Correo electrónico inválido';
    break;
  case 'auth/user-not-found':
    document.querySelector('#emailErrorLog').innerHTML = 'Usuario no registrado';
    break;
  case 'auth/user-disabled':
    document.querySelector('#emailErrorLog').innerHTML = 'Correo electrónico deshabilitado';
    break;
  case 'auth/wrong-password':
    document.querySelector('#passwordErrorLog').innerHTML = 'Contraseña incorrecta';
    break;
  }
};

export const showUncompletedErrors = () => document.querySelector('#uncompletedError').innerHTML = '<img id="iconUn" class="alert" src = "img/icon.png"/>' + 'Complete los campos requeridos';
