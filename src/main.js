import {initRouter} from './lib/app.js';
import { initFirebase } from './lib/fireBase.js';
const init = () => {
  initFirebase();
  initRouter();
};
window.addEventListener('load', init);

