const AtbashCipher = require('../../src/ciphers/AtbashCipher');

describe('checking AtbashCipher method', () => {
  const atbash = new AtbashCipher();

  test('ciphering', () => {
    expect(atbash.ciphering('Hello World!')).toMatch(/Svool Dliow!/);
  });

  test('offsetAtbash', () => {
    expect(atbash.offsetAtbash('abC 1 _')).toBe('zyX 1 _');
  });

  test('offsetAtbash for only latin', () => {
    expect(atbash.offsetAtbash('привет мир')).toBe('привет мир');
  });
});
