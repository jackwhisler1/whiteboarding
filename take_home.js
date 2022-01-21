function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // heads first combination
  // consider heads = 0 and tails = 1
  let changeOdds = 0;
  let changeEvens = 0;
  let T = A; // create duplicate array to test
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== A[i + 1] && A[0] === 0) {
    } else {
      // if coin is tails, make next coin heads. otherwise make next coin tails
      if (A[i] > 0) {
        A[i + 1] = 0;
      } else {
        A[i + 1] = 1;
      }
      keepFirstCount++;
    }
    // tails first combination
    if (T[i] !== T[i + 1]) {
      break;
    } else {
      // if coin is tails, make next coin heads. otherwise make next coin tails
      if (T[i] > 0) {
        T[i] = 0;
      } else {
        T[i] = 1;
      }
      changeFirstCount++;
    }
  }
  console.log(keepFirstCount, changeFirstCount);
}
solution([1, 0, 1, 0, 1, 1]);
solution([1, 1, 1, 0, 1, 1]);

// change odds
// change evens
// if i % 2.0 !== 0
