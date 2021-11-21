const { warningErr, flagErr } = require('../errorsData');

function checkingOffset(offset, Cipher) {
  let result = null;

  switch (offset) {
    case '1':
      result = new Cipher(1);
      break;
    case '0':
      result = new Cipher(0);
      break;
    default:
      process.stderr.write(`${warningErr + flagErr(offset)}\n`);
      process.exit(1);
  }

  return result;
}

module.exports = checkingOffset;
