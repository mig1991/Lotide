const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Define the tail function
const tail = function(array) {
  return array.slice(1);
};

// Test cases for the tail function
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailWords = tail(words); // Capture the return value of the tail function

// Test case 1: Original array should still have 3 elements
assertEqual(words.length, 3);

// Test case 2: First element of the returned array should be the second element of the original array
assertEqual(tailWords[0], words[1]);

// Test case 3: Behavior of tail function with an array with one element
const singleElementArray = [1];
const tailSingleElementArray = tail(singleElementArray);
assertEqual(tailSingleElementArray.length, 0); // Tail of a single-element array should be an empty array

// Test case 4: Behavior of tail function with an empty array
const emptyArray = [];
const tailEmptyArray = tail(emptyArray);
assertEqual(tailEmptyArray.length, 0); // Tail of an empty array should be an empty array