function solution(A) {
  let oddsHeads = 0;
  let evensHeads = 0;

  for (let i = 0; i < A.length; i++) {
    // two scenarios, all odds are heads or all evens are heads
    if (i % 2 === 0) {
      if (A[i] === 0) {
        oddsHeads++;
      } else {
        evensHeads++;
      }
    }
    if (i % 2 === 1) {
      if (A[i] === 1) {
        oddsHeads++;
      } else {
        evensHeads++;
      }
    }
  }
  // return minimum of two counts
  return Math.min(oddsHeads, evensHeads);
}
console.log(solution([1, 0, 1, 0, 1, 1]));
console.log(solution([1, 1, 0, 1, 1]));
console.log(solution([0, 1, 0]));
console.log(solution([0, 1, 1, 0]));

// change odds
// change evens
// if i % 2.0 !== 0
