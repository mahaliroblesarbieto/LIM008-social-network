
import {objTemp} from './tempString.js';
// const changeTmp = (hash) => {
//   if (hash === '#/' || hash === '' || hash === '#') {
//     return viewTmp('#/home');
//   } else {
//     return viewTmp(hash);
//   }
    
// const viewTmp = (routers) => {
//     const router = routers.substr(2, routers.length - 2);
//     const container = document.getElementById('container');
//     container.innerHTML = '';
//     container.appendChild(objTemp[router]());
//   // hashSpa;
//   };


//   // export const hashSpa = () => { 
//   window.addEventListener('load', () => changeTmp());
//   if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
// };


export const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') { 
    return viewTmp('#/mainPage');
  } else {
    return viewTmp(hash);
  }
};

export const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  container.appendChild(objTemp[router]());};

window.addEventListener('load', () => changeTmp());
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
