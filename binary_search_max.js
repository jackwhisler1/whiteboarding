class Solution {
  maximumCount(nums) {
    let start = 0,
      end = nums.length - 1;
    let maxNegatives = 0,
      maxPositives = 0; // To hold the counts of negatives and positives

    // First pass to find the count of negative numbers
    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      if (nums[mid] < 0) {
        maxNegatives = mid + 1; // Update count of negatives
        start = mid + 1; // Move to the right
      } else {
        end = mid - 1; // Continue searching in the left half
      }
    }

    start = 0;
    end = nums.length - 1;

    // Second pass to find the count of positive numbers
    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      if (nums[mid] > 0) {
        maxPositives = nums.length - mid; // Update count of positives
        end = mid - 1; // Continue searching in the left half
      } else {
        start = mid + 1; // Move to the right
      }
    }

    // Return the maximum of the counts of negatives and positives
    return Math.max(maxNegatives, maxPositives);
  }
}

const solution = new Solution();

// Example 1
const nums1 = [-4, -3, -1, 0, 1, 3, 5, 7];
console.log("Example 1:", solution.maximumCount(nums1)); // Expected Output: 4

// Example 2
const nums2 = [-8, -7, -5, -4, 0, 0, 0];
console.log("Example 2:", solution.maximumCount(nums2)); // Expected Output: 4

// Example 3
const nums3 = [0, 2, 2, 3, 3, 3, 4];
console.log("Example 3:", solution.maximumCount(nums3)); // Expected Output: 6
