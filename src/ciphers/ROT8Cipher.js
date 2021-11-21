const CaesarCipher = require('./CaesarCipher');

class ROT8Cipher extends CaesarCipher {
  #initRot8Offset = [-8, 8];

  constructor(offset) {
    super(offset);
    this.offsetParam = this.#initRot8Offset;
  }
}

module.exports = ROT8Cipher;
