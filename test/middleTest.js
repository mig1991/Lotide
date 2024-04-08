const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


const testArray1 = [1, 2, 3, 4, 5, 6, 7]; // should be [4]
const testArray2 = [0]; // should be []
const testArray3 = [1, 2, 3, 4, 5, 6]; // should be [3, 4]

assertArraysEqual(middle(testArray1), [4]); // should be [4]
assertArraysEqual(middle(testArray2), []); // should be []
assertArraysEqual(middle(testArray3), [3, 4]); // should be [3, 4]
//if array is even, return two mid elements