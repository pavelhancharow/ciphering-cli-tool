const { findingFile } = require('../../src/validations');

describe('User passes -i or -o argument with path that ', () => {
  test("doesn't exist or with no read access", () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    findingFile('input1.txt');
    expect(mock).toHaveBeenCalledWith(1);
  });

  test('exist or with read access', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    findingFile('input.txt');
    expect(mock).toHaveBeenCalled();
  });
});
