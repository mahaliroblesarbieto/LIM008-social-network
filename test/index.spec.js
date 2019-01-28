// importamos la funcion que vamos a testear
import { authenticateGoogleAccount,
  authenticateFacebookAccount,
  authenticateWithEmailAndPassword,
  createUserWithEmailAndPassword} from '../src/lib/index';

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

describe('authenticateWithEmailAndPassword', () => {
  it('debería ser una función', () => {
    expect(typeof authenticateWithEmailAndPassword).toBe('function');
  });
});

describe('createUserWithEmailAndPassword', () => {
  it('debería ser una función', () => {
    expect(typeof createUserWithEmailAndPassword).toBe('function');
  });
});


