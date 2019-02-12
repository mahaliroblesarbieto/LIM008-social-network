import {initRouter} from './lib/app.js';
import { initFirebase } from './lib/ConfigFireBase1.js';
const init = () => {
  initFirebase();
  initRouter();
};
window.addEventListener('load', init);

