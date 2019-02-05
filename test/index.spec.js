// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);


import { authenticateGoogleAccount,
  authenticateFacebookAccount,
  authenticateWithEmailAndPassword,
  createUserWithEmailAndPassword} from '../src/lib/index.js';

describe('authenticateGoogleAccount', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateGoogleAccount).toBe('function');
  });

  it('debería ser una función', () => {
    expect(typeof authenticateGoogleAccount).toBe('function');
  });
});

describe('authenticateFacebookAccount', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateFacebookAccount).toBe('function');
  });
});

describe('authenticateWithEmailAndPassword', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateWithEmailAndPassword).toBe('function');
  });
});

describe('createUserWithEmailAndPassword', () => {
  it('debería ser una función', () => {
    expect(typeof createUserWithEmailAndPassword).toBe('function');
  });
});

describe('authenticateWithEmailAndPassword', () => {
  it('Debería poder iniciar sesion', () => {
    return authenticateWithEmailAndPassword('front@end.la', '123456')
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
