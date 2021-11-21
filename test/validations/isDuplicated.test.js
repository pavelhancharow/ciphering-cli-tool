const { isDuplicated } = require('../../src/validations');

describe('Has an argv list of duplicate arguments ', () => {
  test('if true ', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    isDuplicated(true);
    expect(mock).toHaveBeenCalledWith(1);
  });

  test('if false ', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    isDuplicated(false);
    expect(mock).toHaveBeenCalled();
  });
});
