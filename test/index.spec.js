// importamos la funcion que vamos a testear
import { authenticateGoogleAccount } from '../src/lib/index';

describe('authenticateGoogleAccount', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateGoogleAccount).toBe('function');
  });
});

