import { initRouter } from './index.js';
const init = () => {
  const config = {
    apiKey: 'AIzaSyBhw65cEJ6zfQx3yQhCnR93-1adgjTzT64',
    authDomain: 'red-social-f7001.firebaseapp.com',
    databaseURL: 'https://red-social-f7001.firebaseio.com',
    projectId: 'red-social-f7001',
    storageBucket: 'red-social-f7001.appspot.com',
    messagingSenderId: '732661442210'
  };
  firebase.initializeApp(config);
  initRouter();
};
  
window.onload = init();
