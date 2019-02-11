import MockFirebase from 'mock-cloud-firestore';
const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        abc12: {
          id: 'abc12',
          nameUser: 'kimberly',
          emailUser: 'kimberlyrojasra@gmail.com',
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
import { createDocumentUserUid } from '../src/lib/index.js';

describe('createDocumentUserUid', () => {
  it('debería ser una función', () => {
    expect(typeof createDocumentUserUid).toBe('function');
  });
});

describe('createDocumentUserUid', () => {
  it('Debería poder agregar una coleccion para guardar los datos de los usuarios', (done) => {
    return createDocumentUserUid('abc12', {uid: 'abcd12', user: 'kimberly', email: 'kimberlyrojasra@gmail.com'})
      .then(data => {
        expect(data.uid).toBe('abc12');
        done();
      });
  });
});