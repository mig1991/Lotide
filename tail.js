// created tail function, which returns everything except the first item
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;