export {changeTmp};
import {objTemp} from './tempString.js';

const changeTmp = (hash) => {
  return viewTmp(hash);
};
    
const viewTmp = (routers) => {
   let router;
   console.log(routers)
   if (routers) {
     router = routers.substr(2, routers.length - 2);
   } else {
     router = 'registry';
   }
  const container = document.getElementById('container');
  container.innerHTML = '';
  container.appendChild(objTemp[router]())
};