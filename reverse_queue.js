function reverseQueue(queue) {
  // let reverseQueue = [];
  // for (let i = queue.length - 1; i >= 0; i--) {
  //   reverseQueue.push(queue[i]);
  // }
  // return reverseQueue;

  // OR
  let reversed = [];
  while (queue.length !== 0) {
    reversed.push(queue.pop());
  }

  return reversed;
}

console.log(reverseQueue([1, 2, 3, 4, 5]));
/*Given a queue, return it after reversing its elements.

Examples:

Input: Queue = [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
Explanation: The input queue elements are reversed.

Input: Queue = [10, 20, 30, 40, 50]
Output: [50, 40, 30, 20, 10]
Explanation: The input queue elements are reversed.

Input: Queue = [5, 7, 9]
Output: [9, 7, 5]
Explanation: The input queue elements are reversed.*/
