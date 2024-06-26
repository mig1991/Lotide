const eqArrays = function(array1, array2) {

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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} and ${array2} are not equal`);
  }
};

const without = function(original, removeThese) {
  let arrayStorage = [];

  for (let num of original) {
    if (!removeThese.includes(num)) {
      arrayStorage.push(num);
    }
  }
  return arrayStorage;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => pass
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 2, 3, 4]), [5, 6]); // this should fail

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => should PASS

