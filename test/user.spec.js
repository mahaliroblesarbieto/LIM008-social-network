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
import { createDocumentUserUid, getUsers, consultUser } from '../src/lib/index.js';

describe('createDocumentUserUid', () => {
  it('debería ser una función', () => {
    expect(typeof createDocumentUserUid).toBe('function');
  });
});

describe('createDocumentUserUid', () => {
  it('Debería poder agregar un usuario', (done) => {
    return createDocumentUserUid('abc12', {id: 'abcd12', nameUser: 'kimberly', emailUser: 'kimberlyrojasra@gmail.com'})
      .then(() =>
          const result = data.find((post) => post.id === 'abc12');
          expect(result.id).toBe('abc12');
          done();
        }));
  });
});