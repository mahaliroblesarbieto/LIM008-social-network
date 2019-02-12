import {initRouter} from './lib/app.js';
import {initFirebase} from './lib/configFireBase.js';
const init = () => {
  initRouter();
  initFirebase();
};
window.addEventListener('load', init);

