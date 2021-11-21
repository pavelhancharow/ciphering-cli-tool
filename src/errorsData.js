const errorsData = {
  warningErr: '\x1b[41mError!\x1b[0m ',
  configErr: 'Please, enter config arguments correctly!',
  duplicationErr: 'Please, enter arguments without duplication!',
  regExpErr: 'Config has an incorrect format. Please, use the correct format \x1b[31m{XY(-)}n\x1b[0m!',
  fileErr: (file) => `No such file or directory, access \x1b[31m'${file}'\x1b[0m `,
  commandErr: (letter) => `No such \x1b[31m'${letter}'\x1b[0m command! Please, choose right command: C, R or A.`,
  flagErr: (flag) => `No such \x1b[31m'${flag}'\x1b[0m offset! Please, choose right offset: 1 or 0.`,
  atbashFlagErr: (flag) => `\x1b[31m'${flag}'\x1b[0m should not be passed Atbash cipher! Please, choose Atbash cipher without flag.`
};

module.exports = errorsData;
