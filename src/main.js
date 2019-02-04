import {initRouter} from './lib/index.js';
import { initFirebase } from './lib/ConfigFireBase.js'
const init = () => {
  initFirebase();
  initRouter();
}
window.addEventListener('load', init)

