const ciphering = require('../src/ciphering');

describe('User passes incorrent letter in argument for --config ', () => {
  test('if true', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    ciphering(['B1', 'D0', 'C1']);
    expect(mock).toHaveBeenCalledWith(1);
  });

  test('if true Atbash offset', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    ciphering(['C1', 'R0', 'A0']);
    expect(mock).toHaveBeenCalled();
  });

  test('if false', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    ciphering(['C1', 'R0', 'A']);
    expect(mock).toHaveBeenCalled();
  });
});
