// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Examples:

// s = "leetcode"
// return 0.
// (The "l" is the first character that only appears once in the string, and appears at index 0.)

// s = "loveleetcode",
// return 2.
// (The "l" and "o" are repeated, so the first non-repeating character is the "v", which is at index 2.)

// Note: You may assume the string contain only lowercase letters.

// assign each letter to a hash
// condition sets it to false if its already in the hash
// "loveleetcode"
// l => false
// o => false
// v => true
// e => false
// t =. true
// c => true
// d => true

// var unique = str[0]
function uniqueLetter(str) {
  let letters = str.split("");
  let unique;
  for (let i = 0; i < letters.length; i++) {
    unique = true;
    for (let j = i + 1; j < letters.length; j++) {
      if (letters[i] === letters[j]) {
        unique = false;
        break;
      }
    }
    if (unique === true) {
      return str.indexOf(letters[i]);
    }
  }
  if (unique === false) {
    return -1;
  }
  console.log(letters);
}
console.log(uniqueLetter("lloobb"));
