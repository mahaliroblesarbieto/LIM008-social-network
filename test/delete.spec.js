import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Posts: {
      __doc__: {
        abc1d: {
          title: 'kimberly',
          complete: false
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { deletePost } from '../src/lib/index.js';

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