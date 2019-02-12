import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Posts: {
      __doc__: {
        abc1d: {
          uid: 'mahali',
          text: 'kimberly',
          public: true,
          likes: 0,
          displayName: 'sandra',
        },
      }
    }
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
import { savePublication, deletePost, consultPost, UpdatedPost, newAddLike, consultTypePost, updatePasswordUser } from '../src/lib/index.js';

describe('savePublication', () => {
  it('debería ser una función', () => {
    expect(typeof savePublication).toBe('function');
  });
});

describe('savePublication', () => {
  it('Debería poder agregar una nota', (done) => {
    return savePublication('mahali', 'karla', true)
      .then(() => consultPost(
        (callback) => {
          const result = callback.find((post) => post.text === 'karla');
          expect(result.text).toBe('karla');
          done();
        }
      ));
  });
});

describe('UpdatePost', () => {
  it('debería ser una función', () => {
    expect(typeof UpdatedPost).toBe('function');
  });
});

describe('UpdatePost', () => {
  it('Debería poder actualizar un post', (done) => {
    return UpdatedPost('abc1d', 'sandra')
      .then(() => consultPost(
        (data) => {
          const result = data.find((post) => post.text === 'sandra');
          expect(result.text).toBe('sandra');
          done();
        }
      ));
  });
});

describe('newAddLike', () => {
  it('debería ser una función', () => {
    expect(typeof newAddLike).toBe('function');
  });
});

describe('newAddLike', () => {
  it('Debería poder actualizar los likes', (done) => {
    return newAddLike('abc1d', '1')
      .then(() => consultPost(
        (data) => {
          const result = data.find((post) => post.likes === '1');
          expect(result.likes).toBe('1');
          done();
        }
      ));
  });
});
describe('deletePost', () => {
  it('debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });
});

describe('deletePost', () => {
  it('Debería poder eliminar un post', (done) => {
    return deletePost('abc1d')
      .then(() => consultPost(
        (data) => {
          const result = data.find((post) => post.id === 'abc1d');
          expect(result).toBe(undefined);
          done();
        }
      ));
  });
});

describe('consultPost', () => {
  it('debería ser una función', () => {
    expect(typeof consultPost).toBe('function');
  });
});

describe('consultPost', () => {
  it('Debería poder traer la colección de posts', (done) => {
    const callback = (data) => {
      expect(data[0].uid).toBe('mahali');
      done();
    };
    consultPost(callback);
  });
});


describe('consultTypePost', () => {
  it('debería ser una función', () => {
    expect(typeof consultTypePost).toBe('function');
  });
});

describe('consultTypePost', () => {
  it('Debería poder obtener los post publicos', (done) => {
    const callback = (data) => {
      expect(data[0].uid).toBe('mahali');
      done();
    };
    consultTypePost(true, callback);
  });
});