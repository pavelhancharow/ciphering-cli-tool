const { warningErr, duplicationErr } = require('../errorsData');

function isDuplicated(result) {
  if (result) {
    process.stderr.write(`${warningErr + duplicationErr}\n`);
    process.exit(1);
  }

  return null;
}

module.exports = isDuplicated;
