const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);
import { authenticateGoogleAccount,
  authenticateFacebookAccount,
  authenticateEmailAndPassword,
  createUserWithEmailAndPassword,
  closeSesion} from '../src/lib/index.js';
describe('authenticateGoogleAccount', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateGoogleAccount).toBe('function');
  });
});
describe('authenticateFacebookAccount', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateFacebookAccount).toBe('function');
  });
});
describe('authenticateEmailAndPassword', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateEmailAndPassword).toBe('function');
  });
});
describe('createUserWithEmailAndPassword', () => {
  it('debería ser una función', () => {
    expect(typeof createUserWithEmailAndPassword).toBe('function');
  });
});
describe('authenticateEmailAndPassword', () => {
  it('Debería poder iniciar sesion', () => {
    return authenticateEmailAndPassword('front@end.la', '123456')
      .then((user) => {
        expect(user.email).toBe('front@end.la');
      });
  });
});
describe('createUserWithEmailAndPassword', () => {
  it('Debería poder crear un usuario', () => {
    return createUserWithEmailAndPassword('front@end.la', '123456')
      .then((user) => {
        expect(user.email).toBe('front@end.la');
      });
  });
});
describe('authenticateGoogleAccount', () => {
  it('Debería poder iniciar sesión', () => {
    return authenticateGoogleAccount()
      .then(() => {
        const user = firebase.auth().currentUser;
        expect(user).not.toBe(null);
      });
  });
});
describe('authenticateFacebookAccount', () => {
  it('Debería poder iniciar sesión', () => {
    return authenticateFacebookAccount()
      .then(() => {
        const user = firebase.auth().currentUser;
        expect(user).not.toBe(null);
      });
  });
});
describe('closeSesion', () => {
  it('debería ser una función', () => {
    expect(typeof closeSesion).toBe('function');
  });
});
describe('closeSesion', () => {
  it('Debería cerrar sesión', () => {
    return closeSesion()
      .then(() => {
        const user = firebase.auth().currentUser;
        expect(user).toBe(null);
      });
  });
});
