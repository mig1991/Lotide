const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// this will define the head function, and will say undefined if array is empty
const head = function(array) {
  if (array.length === 0) {
    return undefined; // displays message if array is empty
  }
  return array[0]; // returns the first element of the array
};

// these tests use the assertEqual fn to test out the head.js fn

assertEqual(head([5,2,3,4,5,6]), 5);
assertEqual(head([]), undefined);
assertEqual(head([1,2,3]), 2); // this one should be wrong