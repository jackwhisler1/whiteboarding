// Write a function that accepts an array of numbers and returns an array with each number increased by 7.
// https://docs.google.com/document/d/1tgRCJusRNrRQxbQM63Adql7Xkx0khsfcjRx-D9jHo3w/edit
// Example:
// Input: [1, 2, 3]
// Output: [8, 9, 10]
function addSeven(arr) {
  return arr.map((a) => a + 7);
}
console.log(addSeven([1, 2, 3]));
