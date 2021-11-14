const { Transform } = require('stream');

class MyTransformStream extends Transform {
  constructor(offset = null) {
    super();

    this.offset = offset;
  }

  _transform(chunk, encoding, callback) {
    this.push(this.ciphering(chunk, this.offset));
    callback();
  }
}

module.exports = MyTransformStream;
