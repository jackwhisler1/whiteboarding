function findMaxOnesRow(mat) {
  let maxOnesIdx = 0;
  let maxOnesCount = 0;
  // ToDo: Write Your Code Here.
  for (let i = 0; i < mat.length; i++) {
    let currentOnesCount = 0;
    mat[i].forEach((value) => {
      value === 1 && currentOnesCount++;
    });
    if (currentOnesCount > maxOnesCount) {
      maxOnesCount = currentOnesCount;
      maxOnesIdx = i;
    }
  }
  return [maxOnesIdx, maxOnesCount];
}
console.log(
  findMaxOnesRow([
    [1, 0],
    [0, 1],
    [1, 1],
  ])
);
