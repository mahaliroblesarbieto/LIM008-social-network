import MockFirebase from 'mock-cloud-firestore';
const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        abc12: {
          id: 'abc12',
          nameUser: 'kimberly',
          emailUser: 'kimberlyrojasra@gmail.com',
        }
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
import { createDocumentUserUid, consultUser} from '../src/lib/index.js';

describe('createDocumentUserUid', () => {
  it('debería ser una función', () => {
    expect(typeof createDocumentUserUid).toBe('function');
  });
});

describe('createDocumentUserUid', () => {
  fit('Debería poder agregar un usuario', (done) => {
    return createDocumentUserUid('abc12', {uid: 'abc12', user: 'kim', email: 'kimberlyrojasra@gmail.com'})
      .then((response) => {
        console.log(response);
        
        consultUser((data) => {
          console.log(data);
          done();
        })
      });
  });
});