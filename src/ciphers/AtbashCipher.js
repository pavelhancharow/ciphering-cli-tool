const MyTransformStream = require('./MyTransformStream');

class AtbashCipher extends MyTransformStream {
  constructor(offset) {
    super(offset);

    this.alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.tebahplaUpper = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
    this.alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    this.tebahplaLower = 'zyxwvutsrqponmlkjihgfedcba';
  }

  ciphering(chunk) {
    const text = chunk.toString();

    return this.offsetAtbash(text);
  }

  offsetAtbash(text) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
      const code = text[i].charCodeAt();

      if (code >= 65 && code <= 90) {
        const idx = this.alphabetUpper.indexOf(text[i]);
        result += this.tebahplaUpper[idx];
      } else if (code >= 97 && code <= 122) {
        const idx = this.alphabetLower.indexOf(text[i]);
        result += this.tebahplaLower[idx];
      } else {
        result += text[i];
      }
    }

    return result;
  }
}

module.exports = AtbashCipher;
