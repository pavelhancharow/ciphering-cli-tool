const { testingFormat } = require('../../src/validations');

describe('User passes incorrent format in argument for --config ', () => {
  test('if true', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    testingFormat('AAA-CC-C1');
    expect(mock).toHaveBeenCalledWith(1);
  });

  test('if false', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    testingFormat('C1-R0-A');
    expect(mock).toHaveBeenCalled();
  });
});
