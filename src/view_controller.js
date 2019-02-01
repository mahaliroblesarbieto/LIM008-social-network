import { Popup, createDocumentUID } from "./lib/index.js";
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
    changeHash('/home');
    console.log(location.hash);
    /*createDocumentUID(uid, {uid,user,email})
     .then(() => { 
      console.log(location.hash);
      })
    .catch(() => {})*/
   }).catch(error => {
    const errorCode = error.code;
    if (errorCode === 'auth/account-exists-with-different-credential') {
      return 'Es el mismo usuario';
    }
  })

};







