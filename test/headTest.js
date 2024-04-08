const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([5,2,3,4,5,6]), 5);
assertEqual(head([]), undefined);