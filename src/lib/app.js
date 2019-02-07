import {objTemp} from './tempString.js';
import { consultPost } from './index.js';

export const changeTmp = (hash) => {
  switch (hash) {
  case '' : 
    viewTmp('#/login');
    break;
  case '#/login' : 
    viewTmp(hash);
    break;
  case '#/home' :
    viewTmp(hash);
    break;
  case '#/registry':
    viewTmp(hash);
    break;
  };
};
    
const viewTmp = (routers) => {
  let router = routers.substr(2, routers.length - 2);
  switch (router) {
  case 'login':  
    const containerLogin = document.getElementById('container');
    containerLogin.innerHTML = '';
    containerLogin.appendChild(objTemp['login']());
    break;
  case 'home' :
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.appendChild(objTemp[router]());
    consultPost();
    break;
  case 'registry':
    const home = document.getElementById('home');
    home.innerHTML = '';
    home.appendChild(objTemp[router]());
    break;
  };
};
export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};

