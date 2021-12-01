const { isIncluded } = require('../../src/validations');

describe('Has an argv list of -c or --config arguments ', () => {
  test('if true ', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    isIncluded(true);
    expect(mock).toHaveBeenCalledWith(1);
  });

  test('if false ', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    isIncluded(false);
    expect(mock).toHaveBeenCalled();
  });
});
