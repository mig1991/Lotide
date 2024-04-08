const head = function(array) {
  if (array.length === 0) {
    return undefined; // displays message if array is empty
  }
  return array[0]; // returns the first element of the array
};


module.exports = head;