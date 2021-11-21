const MyTransformStream = require('./MyTransformStream');

class CaesarCipher extends MyTransformStream {
  #initCaesarOffset = [-1, 1];

  constructor(offset) {
    super(offset);
    this.offsetParam = this.#initCaesarOffset;
  }

  ciphering(chunk, offset) {
    const text = chunk.toString();

    return this.offsetCipher(text, offset);
  }

  offsetCipher(text, n) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
      let code = text[i].charCodeAt();

      if (code >= 65 && code <= 90) {
        code += this.offsetParam[n];

        if (code > 90) code = code - 91 + 65;
        if (code < 65) code = 91 - (65 - code);

        result += String.fromCharCode(code);
      } else if (code >= 97 && code <= 122) {
        code += this.offsetParam[n];

        if (code > 122) code = code - 123 + 97;
        if (code < 97) code = 123 - (97 - code);

        result += String.fromCharCode(code);
      } else {
        result += text[i];
      }
    }

    return result;
  }
}

module.exports = CaesarCipher;
