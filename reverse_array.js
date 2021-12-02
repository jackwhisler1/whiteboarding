// Given an array, write a function that returns an array that contains the original array’s values in reverse.

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]
// Create a new array using opposite index order
// loop through, subtracting
function reverse(arr) {
  // set index to last value of array
  let reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}
console.log(reverse([1, 2, 3, 4, 5]));
