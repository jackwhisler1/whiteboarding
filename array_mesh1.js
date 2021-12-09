// Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

// Input: ["a", "b", "c"], ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]
// Loop through first array, could do inner loop with second array but would result in o of n squared
function mesh(arr1, arr2) {
  let meshedArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      meshedArr.push(arr1[i] + arr2[j]);
    }
  }
  return meshedArr;
}
console.log(mesh(["a", "b", "c"], ["d", "e", "f", "g"]));
