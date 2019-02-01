export {changeTmp};
import {objTemp} from './tempString.js';

const changeTmp = (hash) => {
  if (hash === '') {
  } else {viewTmp(hash);
  } 
};
    
const viewTmp = (routers) => {
  let router = routers.substr(2, routers.length - 2);
  console.log(router);
  const container = document.getElementById('container');
  container.innerHTML = '';
  container.appendChild(objTemp[router]());
};