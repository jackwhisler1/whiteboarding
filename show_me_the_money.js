// Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

// Input: “i hate $ but i love money i know i know im crazy”
// Output: true

// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false
function showMeTheMoney(str) {
  const letters = str.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "$") {
      return true;
    }
  }
  return false;
}
console.log(showMeTheMoney("abcdefghijklmnopqrstuvwxyz"));
console.log(showMeTheMoney("i hate $ but i love money i know i know im crazy"));
