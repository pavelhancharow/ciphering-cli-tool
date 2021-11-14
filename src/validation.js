const { accessSync, constants } = require('fs');
const { stderr, exit } = require('process');
const { warningErr, configErr, duplicationErr, regExpErr, fileErr } = require('./errorsData');

function testingFormat(str) {
  const regExp = /^([A-Z\d]{1,2}-)*[A-Z\d]{1,2}$/gm;

  if (!str.match(regExp)) {
    stderr.write(`${warningErr + regExpErr}\n`);
    exit(1);
  }

  return str;
}

function findingFile(file) {
  try {
    accessSync(file, constants.F_OK);
  } catch (e) {
    stderr.write(`${warningErr + fileErr(file)}\n`);
    exit(1);
  }

  return file;
}

function validation(args) {
  if (!args.includes('-c') && !args.includes('--config')) {
    stderr.write(`${warningErr + configErr}\n`);
    exit(1);
  }

  if ([...new Set(args)].length !== args.length) {
    stderr.write(`${warningErr + duplicationErr}\n`);
    exit(1);
  }

  const options = {
    cipher: '',
    input: '',
    output: ''
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '-c' || args[i] === '--config') {
      options.cipher = testingFormat(args[i + 1], warningErr);
    } else if (args[i] === '-i' || args[i] === '--input') {
      options.input = findingFile(args[i + 1]);
    } else if (args[i] === '-o' || args[i] === '--output') {
      options.output = findingFile(args[i + 1]);
    }
  }

  return options;
}

module.exports = validation;