const { createReadStream, createWriteStream } = require('fs');
const { argv, stdin, stderr, stdout, exit } = require('process');
const { Stream } = require('stream');
const validation = require('./src/validation');
const { warningErr } = require('./src/errorsData');
const ciphering = require('./src/ciphering');

const args = argv.slice(2);
const { cipher, input, output } = validation(args);

const readStream = input ? createReadStream(input, 'utf-8') : stdin;
const writeStream = output ? createWriteStream(output, { flags: 'a' }) : stdout;

const cipherConfig = cipher.split('-');
const cipherScrip = ciphering(cipherConfig);

try {
  Stream.pipeline(readStream, ...cipherScrip, writeStream, (err) => {
    if (err) {
      stderr.write(`${warningErr + err.message}\n`);
      exit(1);
    }
  });
} catch (err) {
  stderr.write(`${warningErr + err.message}\n`);
  exit(1);
}
