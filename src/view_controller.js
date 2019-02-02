
<<<<<<< HEAD
import { Popup, createDocumentUID } from './lib/index.js';
import { changeTmp } from './lib/app.js';
=======
import { Popup, createDocumentUID } from "./lib/index.js";
import { changeTmp } from "./lib/app.js";
>>>>>>> eea748931a19587ec04803b22943cb122ca6bece
const changeHash = (hash) =>  {
  location.hash = hash;
  console.log(location.hash);
}
export const loginFacebook = () => {
  Popup()
    .then(result => {
      console.log(result.user.uid);
      const uid = result.user.uid;
      const user = result.user.displayName;  
      const email = result.user.email;
      location.hash = '#/home';
      changeTmp(location.hash);
    }).catch(error => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        return 'Es el mismo usuario';
      }
    });
};

  /*createDocumentUID(uid, {uid,user,email})
      .then(() => { 
        console.log(location.hash);
        })
      .catch(() => {})*/
