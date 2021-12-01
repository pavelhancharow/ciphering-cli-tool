const { checkingOffset } = require('../../src/validations');

describe('User passes incorrent offset in argument for --config ', () => {
  test('if true offset', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    checkingOffset(['C2', 'A', 'R1']);
    expect(mock).toHaveBeenCalledWith(1);
  });

  test('if false', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    checkingOffset(['C1', 'R0', 'A']);
    expect(mock).toHaveBeenCalled();
  });
});
