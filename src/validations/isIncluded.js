const { warningErr, configErr } = require('../errorsData');

function isIncluded(result) {
  if (result) {
    process.stderr.write(`${warningErr + configErr}\n`);
    process.exit(1);
  }

  return null;
}

module.exports = isIncluded;
