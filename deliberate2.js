// Write a function that accepts an array of strings and returns an array with each string's length.
// Example:
// Input: ["hello", "goodbye"]
// Output: [5, 7]
function strLength(arr) {
  return arr.map((word) => word.length);
}
console.log(strLength(["hello", "goodbye"]));
