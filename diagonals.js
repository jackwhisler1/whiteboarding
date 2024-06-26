function diagonalSum(mat) {
  let totalSum = 0; // Initialize the total sum
  let isOdd = Boolean(mat.length % 2 !== 0); // determine if odd
  let downwardDiagonal = 0;
  let upwardDiagonal = 0;
  const reverseIterator = mat.length - 1;

  for (let i = 0; i < mat.length; i++) {
    downwardDiagonal += mat[i][i];
    upwardDiagonal += mat[i][reverseIterator - i];
  }
  totalSum = downwardDiagonal + upwardDiagonal;

  if (mat.length === 1) {
    totalSum = mat[0][0];
  } else if (isOdd) {
    // subtract dupplicate center value
    const center = (mat.length - 1) / 2;

    totalSum = totalSum - mat[center][center];
  }

  return totalSum; // Return the calculated total sum
}
console.log(
  diagonalSum([
    [1, 2],
    [3, 4],
  ]) //10
); // adds mat[0][0] + [1][1], [0][1] + [1][0]
console.log(
  diagonalSum([
    [5, 3, 9],
    [4, 7, 1],
    [8, 6, 2],
  ]) //14 + 17 = 31
); // adds mat[0][0] + [1][1] + [2][2], [0][end] + [1][end - 1] (dupe) + [end][0]
