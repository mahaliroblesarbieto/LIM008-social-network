import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Posts: {
      __doc__: {
        abc1d: {
          uid: 'mahali',
          text: 'kimberly',
          public: true,
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
import { savePublication, deletePost, consultPost } from '../src/lib/index.js';

describe('savePublication', () => {
  it('debería ser una función', () => {
    expect(typeof savePublication).toBe('function');
  });
});

describe('lista de notas', () => {
  it('Debería poder agregar una nota', (done) => {
    return savePublication('mahali', 'kimberly', true)
      .then(() => consultPost(
        (callback) => {
          const result = callback.find((post) => post.text === 'kimberly');
          expect(result.text).toBe('kimberly');
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

describe('lista de posts', () => {
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