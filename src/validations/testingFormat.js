const { warningErr, regExpErr } = require('../errorsData');

function testingFormat(str) {
  const regExp = /^([A-Z\d]{1,2}-)*[A-Z\d]{1,2}$/gm;

  if (!str.match(regExp)) {
    process.stderr.write(`${warningErr + regExpErr}\n`);
    process.exit(1);
  }

  return str;
}

module.exports = testingFormat;
