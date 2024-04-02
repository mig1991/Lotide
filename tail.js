const assertEqual = function(actual, expected) {
  // Check if the arrays are equal
  const arraysAreEqual = actual.length === expected.length && arraysHaveSameElements(actual, expected);

  // Print the result of the assertion
  if (arraysAreEqual) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Helper function to check if arrays have the same elements
const arraysHaveSameElements = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; // If any elements are different, the arrays are not equal
    }
  }
  return true; // If all elements are equal, the arrays are equal
};

// Define the tail function
const tail = function(array) {
 
  
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailWords = tail(words); // Capture the return value of the tail function
assertEqual(words.length, 3); // original array should still have 3 elements!