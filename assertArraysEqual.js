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
    console.log(`✅✅✅ pass, ${array1} and ${array2} are equal`);
  } else {
    console.log(`🔴🔴🔴 fail, ${array1} and ${array2}l do not match`);
  }
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3,4], [1,2,3,4,5]);
assertArraysEqual([1,2,"3"], [1,2,3]);