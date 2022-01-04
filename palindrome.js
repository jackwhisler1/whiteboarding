// Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

// Input: “racecar”
// Output: true

// Input: “baloney”
// Output: false

function palindrome(str) {
  // reverse string (without reverse method)
  const chars = str.split("");
  let reversed = "";
  for (let i = chars.length - 1; i >= 0; i--) {
    reversed += chars[i];
  }
  return reversed === str ? true : false;
}
console.log(palindrome("racecar"));
console.log(palindrome("baloney"));
