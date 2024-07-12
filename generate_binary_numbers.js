function generateBinaryList(n) {
  let binaryNums = [];
  let iterator = 1;
  while (iterator <= n) {
    let binaryQueue = [];
    let current = iterator; // n is integer
    while (current > 0) {
      binaryQueue.unshift(current % 2);
      current = Math.floor(current / 2);
    }
    binaryNums.push(binaryQueue.join("")); // the nums array adds the binary representation of current value for n
    iterator++;
  }
  return binaryNums; // returns array from 1 through n in binary
}
/* Given an integer N, generate all binary numbers from 1 to N and return them as a list of strings.

Examples:

Input: N = 2
Output: ["1", "10"]
Explanation: The binary representation of 1 is "1", and the binary representation of 2 is "10".

Input: N = 3
Output: ["1", "10", "11"]
Explanation: The binary representation of 1 is "1", the binary representation of 2 is "10", and the binary representation of 3 is "11".*/
