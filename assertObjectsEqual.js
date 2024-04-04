const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1); //grab keys from object 1
  const keys2 = Object.keys(obj2); //grab keys from object 2

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};


const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  
  if (eqObjects(obj1, obj2)) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};