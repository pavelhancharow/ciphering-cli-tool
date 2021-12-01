const { isIncluded, isDuplicated, testingFormat, findingFile } = require('./validations');

function validation(args) {
  isIncluded(!args.includes('-c') && !args.includes('--config'));
  isDuplicated([...new Set(args)].length !== args.length);

  const options = {
    cipher: '',
    input: '',
    output: ''
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '-c' || args[i] === '--config') {
      options.cipher = testingFormat(args[i + 1]);
    } else if (args[i] === '-i' || args[i] === '--input') {
      options.input = findingFile(args[i + 1]);
    } else if (args[i] === '-o' || args[i] === '--output') {
      options.output = findingFile(args[i + 1]);
    }
  }

  return options;
}

module.exports = validation;
