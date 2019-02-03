import {createUserWithEmailAndPassword} from './lib/index.js';
import { changeTmp } from './lib/app.js';
import { authenticateFacebookAccount, createDocumentUID } from './lib/index.js' ;
export const signUpOnClick = () => {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  createUserWithEmailAndPassword(email, password);
  location.hash='#/home';
  changeTmp(location.hash);
};
export const authenticateFacebook = () => {
  authenticateFacebookAccount()
    .then(result => {
      const uid = result.user.uid;
      const user = result.user.displayName;
      const email = result.user.email;
      createDocumentUID(uid, {uid, user, email})
        .then(() => {
          location.hash = '#/home';
          changeTmp(location.hash);
        })
        .catch(() => {
          return 'Error de conexión';
        });
      
    })
    .catch(error => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        return 'Es el mismo usuario';
      }
    });
};
