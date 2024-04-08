const tail = require("../tail");
const assertEqual = require("../assertEqual");






const words = ["Hello", "Lighthouse", "Labs"];
const tailWords = tail(words); // Capture the return value of the tail function

// check to see that arrays are same length
assertEqual(words.length, 3);

// first of tail should be 2nd of words
assertEqual(tailWords[0], words[1]);

// one element test
const oneElement = [1];
const tailOneElement = tail(oneElement);
assertEqual(tailOneElement.length, 0);

// empty array
const emptyArray = [];
const tailEmptyArray = tail(emptyArray);
assertEqual(tailEmptyArray.length, 0);