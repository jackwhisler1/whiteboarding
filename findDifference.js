function findDifferenceArray(nums) {
  const n = nums.length;
  const differenceArray = new Array(n).fill(0);
  // TODO: Write your code here
  // split array at index
  // sum first sub array, sum second sub array
  // absolute value diff
  // careful to check if array first
  const leftSum = new Array(n).fill(0);
  const rightSum = new Array(n).fill(0);

  // Calculate leftSum array
  for (let i = 1; i < n; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }

  // Calculate rightSum array
  for (let i = n - 2; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }

  // Calculate differenceArray
  for (let i = 0; i < n; i++) {
    differenceArray[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return differenceArray;
}


// Example usage:
console.log(findDifferenceArray([1, 2, 3, 4])); // Output: [10, 4, 2, 6]
