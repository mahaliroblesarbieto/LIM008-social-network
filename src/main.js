import {initRouter} from './lib/app.js';
import { initFirebase } from './lib/ConfigFireBase.js';
const init = () => {
  initRouter();
  initFirebase();
};
window.addEventListener('load', init);

