function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  // any x must be changed to .
  // will change 3 index in a row, begin with x
  // increase count each "patch"
  // change to array sections
  // for loop if S[i] === "X" set it to x, s[i + 1] s[i + 2] keep loopin]

  let patchCount = 0;
  const pothole = "X";
  const roadSections = S.split("");
  for (let i = 0; i < S.length; i++) {
    if (roadSections[i].toUpperCase() === pothole) {
      roadSections[i] = ".";
      roadSections[i + 1] = ".";
      roadSections[i + 2] = ".";
      patchCount++;
    }
  }
  return patchCount;
}

console.log(solution(".X..X"));
