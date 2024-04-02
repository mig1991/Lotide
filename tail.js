const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Helper function to check if arrays have the same elements
const arraysHaveSameElements = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false; // If the arrays have different lengths, they are not equal
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; // If any elements are different, the arrays are not equal
    }
  }
  return true; // If all elements are equal, the arrays are equal
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