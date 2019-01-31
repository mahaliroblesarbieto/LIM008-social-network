export {changeTmp};
import {objTemp} from './tempString.js';

const changeTmp = (hash) => {
  return viewTmp(hash);
};
    
const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = objTemp[router];
};