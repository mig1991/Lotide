/* eslint-disable no-undef */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`🔴🔴🔴🔴🔴 ${array1} and ${array2} do not match, therefore false`);
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🔴🔴🔴🔴🔴 ${array1} and ${array2} do not match, therefore false`);
      return false;
    }
  }
  console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
  return true;

  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};


// TEST CODE
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);