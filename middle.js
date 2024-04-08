const middle = function (array) {
  const middleNumber = Math.floor(array.length / 2);
  //if array only has 1 or two elements, return empty array
  if (array.length <= 2) {
    return []; //return empty array
  } else if (array.length % 2 !== 0) {
    //if array length / 2 isn't zero, then it is odd
    return [array[middleNumber]];
  } else {
    //it must be even
    return [array[middleNumber - 1], array[middleNumber]];
  }
};

module.exports = middle;