// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”
// array of chars
// add to hash
// if in hash, return true
// else add to hash
// return false outside loop
function duplicate(str) {
  const letters = str.split("");
  let dupes = {};
  for (let i = 0; i < letters.length; i++) {
    if (dupes[letters[i]]) {
      return letters[i];
    } else {
      dupes[letters[i]] = 1;
    }
  }
  return null;
}
console.log(duplicate("hearrbasd"));
console.log(duplicate("hearbsd"));
