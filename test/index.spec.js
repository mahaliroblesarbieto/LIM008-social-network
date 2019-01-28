// importamos la funcion que vamos a testear
import { authenticateGoogleAccount,
  authenticateFacebookAccount} from '../src/lib/index';

describe('authenticateGoogleAccount', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateGoogleAccount).toBe('function');
  });
});

describe('authenticateFacebookAccount', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateFacebookAccount).toBe('function');
  });
});

