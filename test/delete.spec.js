import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc1d: {
          title: 'terminar la pildora',
          complete: false
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { getPosts, deletePosts } from './lib/index.js';

describe('lista de posts', () => {
  it('Debería poder eliminar un post', (done) => {
    return deletePosts('preparar la pildora')
      .then(() => getNotes(
        (data) => {
          const result = data.find((post) => post.title === 'preparar la pildora');
          expect(result.title).toBe('preparar la pildora');
          done();
        }
      ));
  });
});