const tail = require("../tail");
const assert = require("chai").assert;

describe('#tail', () => {
  it('returns "Lighthouse", "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('[1] returns 0', () => {
    assert.deepEqual(tail([1]).length, 0);
  });
  it('[] returns 0', () => {
    assert.deepEqual(tail([]).length, 0);
  });
});





/*
const words = ["Hello", "Lighthouse", "Labs"];
const tailWords = tail(words); // Capture the return value of the tail function

// first of tail should be 2nd of words
assertEqual(tailWords[0], words[1]);

// one element test
const oneElement = [1];
const tailOneElement = tail(oneElement);
assertEqual(tailOneElement.length, 0);

// empty array
const emptyArray = [];
const tailEmptyArray = tail(emptyArray);
assertEqual(tailEmptyArray.length, 0);
*/

