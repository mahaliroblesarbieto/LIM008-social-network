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

import { consultPost, deletePosts } from '../src/lib/index.js';

describe('deletePosts', () => {
  it('debería ser una función', () => {
    expect(typeof deletePosts).toBe('function');
  });
});

// describe('lista de posts', () => {
//   it('Debería poder eliminar un post', (done) => {
//     return deletePosts('abc1d')
//       .then(() => consultPost(
//         (data) => {
//           const result = data.find((post) => post.id === 'abc1d');
//           expect(result).toBe(undefined);
//           done();
//         }
//       ));
//   });
// });