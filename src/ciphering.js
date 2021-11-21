const { stderr, exit } = require('process');
const { warningErr, commandErr, flagErr, atbashFlagErr } = require('./errorsData');
const { CaesarCipher, ROT8Cipher, AtbashCipher } = require('./ciphers');

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
      stderr.write(`${warningErr + flagErr(offset)}\n`);
      exit(1);
  }

  return result;
}

function ciphering(config) {
  const ciphers = [];

  for (let i = 0; i < config.length; i++) {
    switch (config[i][0]) {
      case 'C':
        ciphers.push(checkingOffset(config[i][1], CaesarCipher));
        break;
      case 'R':
        ciphers.push(checkingOffset(config[i][1], ROT8Cipher));
        break;
      case 'A':
        if (config[i][1]) {
          stderr.write(`${warningErr + atbashFlagErr(config[i][1])}\n`);
          exit(1);
        }

        ciphers.push(new AtbashCipher());
        break;
      default:
        stderr.write(`${warningErr + commandErr(config[i][0])}\n`);
        exit(1);
    }
  }
  return ciphers;
}

module.exports = ciphering;
