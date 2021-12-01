const CaesarCipher = require('../../src/ciphers/CaesarCipher');

describe('checking CaesarCipher method', () => {
  const caesar = new CaesarCipher();

  test('ciphering', () => {
    expect(caesar.ciphering('Hello World!', '1')).toMatch(/Ifmmp Xpsme!/);
  });

  test('offsetCipher', () => {
    expect(caesar.offsetCipher('abC 1 _', '0')).toBe('zaB 1 _');
  });

  test('offsetCipher for only latin', () => {
    expect(caesar.offsetCipher('привет мир')).toBe('привет мир');
  });
});
