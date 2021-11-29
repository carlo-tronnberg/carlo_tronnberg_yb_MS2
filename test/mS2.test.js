const { carlo_tronnberg_yb_MS2 } = require('../src/mS2');


describe('carlo_tronnberg_yb_MS2', () => {
  it('Start a new mS2', () => {
    const mS2 = new carlo_tronnberg_yb_MS2();

    expect(mS2.getStatus()).toEqual('running');
  });
});

describe('carlo_tronnberg_yb_MS2 2', () => {
  it.each([
    [1, 'one'],
    [2, 'two'],
  ])("Given ,      When %i,      Then  '%s'", (x, result) => {
    const mS2 = new carlo_tronnberg_yb_MS2();
    expect(mS2.getValue(x)).toEqual(result);
  });
});

