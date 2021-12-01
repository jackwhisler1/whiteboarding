// Write a function that accepts an array of numbers and returns the product of all the numbers.

// Input: [1, 2, 3, 4]
// Output: 24

// Explanation: (1 x 2 x 3 x 4) = 24
function reduce(arr) {
  let i = 1;
  let product = arr[0];
  while (i < arr.length) {
    product = product * arr[i];
    i++;
  }
  return product;
}
console.log(reduce([1, 2, 3, 4]));
