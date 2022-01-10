// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]

// Use select method to find less than 100

function lessThan100(num) {
  return num < 100;
}
function filter(arr) {
  return arr.filter(lessThan100);
}
console.log(filter([99, 101, 88, 4, 2000, 50]));
