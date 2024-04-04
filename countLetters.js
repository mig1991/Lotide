const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (words) {
  const letterCount = {};

  for (let letter of words) { //iterate through each letter in the word
    if (letter !== ' ' && letter !== ',') {
      if (letterCount[letter]) { //check if the current letter already has a count (checking for a value, true if there is a value already)
        letterCount[letter]++; //if there is a value, increase count by 1
      } else {
        letterCount[letter] = 1; //if no value, initialize a value for the letter (key)
      }
    }
  }
  return letterCount;
}

console.log(countLetters("Hello, my name is Miguel and I am cool"));