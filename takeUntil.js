const takeUntil = function (array, callback) {
  let storeArray = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    }
    storeArray.push(element);
  }
  return storeArray;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); //expected output [ 1, 2, 5, 7, 2 ]

console.log('---'); // --

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]; //[ 'I\'ve', 'been', 'to', 'Hollywood' ]
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results3 = takeUntil(data3, x => x > 6); // [1, 2, 3, 4, 5, 6]
console.log(results3);