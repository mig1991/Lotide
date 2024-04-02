const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// this will define the head function, and will say undefi
const head = function(array) {
  if (array.length === 0) {
    return undefined; // displays message if array is empty
  }
  return array[0]; // Return the first element of the array
};

assertEqual(head([5,2,3,4,5,6]), 5);
assertEqual(head([]), undefined);
assertEqual(head([1,2,3]), 2);