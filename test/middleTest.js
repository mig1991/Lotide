const middle = require("../middle");
const assert = require("chai").assert;

describe('#middle', () => {
  it('[1, 2, 3, 4, 5, 6, 7] should return [4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it('returns an empty array for [0]', () => {
    assert.deepEqual(middle([0]), []);
  });
  it('[1, 2, 3, 4, 5, 6] should return [3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});