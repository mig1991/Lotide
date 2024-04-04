const assertEqual = function (actual, expected) {
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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} and ${array2} are not equal`);
  }
};



const letterPositions = function (sentence) {
  const results = {};
  let i = 0;
  // logic to update results here
  for (let letter of sentence) { //iterate through each letter
    if (letter !== ' ') { // if letter isn't a space, move to next step
      if (results[letter] === undefined) { //if this is the first time seeing that letter, make an empty array
        results[letter] = [];
      }
      results[letter].push(i); //push the current index # into the array
    
    }
    i++; //increment the index
  }
  return results;

}
console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions("hello").e, [1]);