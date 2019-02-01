export {changeTmp};
import {objTemp} from './tempString.js';

const changeTmp = (hash) => {
  switch (hash) {
  case '#/home':
    viewTmp(hash);
    break;
  case '#/registry':
    viewTmp(hash);
    break;
  }
};
    
const viewTmp = (routers) => {
  let router = routers.substr(2, routers.length - 2);
  console.log(router);
  const container = document.getElementById('container');
  container.innerHTML = '';
  container.appendChild(objTemp[router]());
};