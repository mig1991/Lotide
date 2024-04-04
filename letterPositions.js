const letterPositions = function (sentence) {
  const results = {};
  let i = 0;
  // logic to update results here
  for (let letter of sentence) { //iterate through each letter
    if (letter !== ' ') { // if letter isn't a space, move to next step
      if (results[letter] === undefined) { //if this is the first time seeing that letter, make an empty array
        results[letter] = [];
      }
      results[letter].push(i); //push the current index into the array
    
    }
    i++; //increment the index
  }
  return results;

}
console.log(letterPositions('lighthouse in the house'));