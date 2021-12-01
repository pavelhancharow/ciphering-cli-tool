const ROT8Cipher = require('../../src/ciphers/ROT8Cipher');

describe('checking ROT8Cipher method', () => {
  const rot8 = new ROT8Cipher();

  test('ciphering', () => {
    expect(rot8.ciphering('Hello World!', '1')).toMatch(/Pmttw Ewztl!/);
  });

  test('offsetCipher', () => {
    expect(rot8.offsetCipher('abC 1 _', '0')).toBe('stU 1 _');
  });

  test('offsetCipher for only latin', () => {
    expect(rot8.offsetCipher('привет мир')).toBe('привет мир');
  });
});
