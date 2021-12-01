const validation = require('../src/validation');

describe('the arguments list is', () => {
  const args = ['-c', 'A-C1-R1', '-i', 'input.txt', '-o', 'output.txt'];

  test('converted to options', () => {
    expect(validation(args)).toEqual({
      cipher: 'A-C1-R1',
      input: 'input.txt',
      output: 'output.txt'
    });
  });
});
