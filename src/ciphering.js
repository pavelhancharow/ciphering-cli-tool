const { warningErr, commandErr, atbashFlagErr } = require('./errorsData');
const { CaesarCipher, ROT8Cipher, AtbashCipher } = require('./ciphers');
const { checkingOffset } = require('./validations');

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
          process.stderr.write(`${warningErr + atbashFlagErr(config[i][1])}\n`);
          process.exit(1);
        }

        ciphers.push(new AtbashCipher());
        break;
      default:
        process.stderr.write(`${warningErr + commandErr(config[i][0])}\n`);
        process.exit(1);
    }
  }
  return ciphers;
}

module.exports = ciphering;
