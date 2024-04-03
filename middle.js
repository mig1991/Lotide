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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} and ${array2} are not equal`);
  }
};

const middle = function(array) {
  const middleNumber = Math.floor(array.length / 2);
  //if array only has 1 or two elements, return empty array
  if (array.length <= 2) {
    return []; //return empty array

  } else if (array.length % 2 !== 0) { //if array length / 2 isn't zero, then it is odd
    return [array[middleNumber]];

  } else { //it must be even
    return [array[middleNumber - 1], array[middleNumber]];
  };
};


const testArray1 = [1, 2, 3, 4, 5, 6, 7]; // should be [4]
const testArray2 = [0]; // should be []
const testArray3 = [1, 2, 3, 4, 5, 6]; // should be [3, 4]

console.log(middle(testArray1)); // should be [4]
console.log(middle(testArray2)); // should be []
console.log(middle(testArray3)); // should be [3, 4]
//if array is even, return two mid elements
