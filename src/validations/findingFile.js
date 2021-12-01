const { accessSync, constants } = require('fs');
const { warningErr, fileErr } = require('../errorsData');

function findingFile(file) {
  try {
    accessSync(file, constants.F_OK);
  } catch (e) {
    process.stderr.write(`${warningErr + fileErr(file)}\n`);
    process.exit(1);
  }

  return file;
}

module.exports = findingFile;
