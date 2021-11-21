const errorsData = require('../src/errorsData');

describe('checking errors data for ', () => {
  const file = 'undefined.txt';

  test('undefined files', () => {
    expect(errorsData.fileErr(file)).toMatch(`No such file or directory, access \x1b[31m'${file}'\x1b[0m`);
  });

  const letter = 'B';

  test('such command', () => {
    expect(errorsData.commandErr(letter)).toMatch(`No such \x1b[31m'${letter}'\x1b[0m command! Please, choose right command: C, R or A.`);
  });

  const flag = '3';

  test('such offset', () => {
    expect(errorsData.flagErr(flag)).toMatch(`No such \x1b[31m'${flag}'\x1b[0m offset! Please, choose right offset: 1 or 0.`);
  });

  test('passed cipher', () => {
    expect(errorsData.atbashFlagErr(flag)).toMatch(`\x1b[31m'${flag}'\x1b[0m should not be passed Atbash cipher! Please, choose Atbash cipher without flag.`);
  });
});
