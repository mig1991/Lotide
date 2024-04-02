const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Define the tail function
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailWords = tail(words); // Capture the return value of the tail function

assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.length, tailWords.length); // comparing lengths instead of arrays directly