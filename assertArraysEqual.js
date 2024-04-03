const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`🔴🔴🔴🔴🔴 ${array1} and ${array2} do not match`);
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🔴🔴🔴🔴🔴 ${array1} and ${array2} do not match`);
      
    }
  }
  console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
  

};
