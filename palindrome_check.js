function palindromeCheck(str) {
  str = str.replace(/\s/g, "");
  const letters = str.split("");
  while (letters.length > 0) {
    let start = letters.shift();
    let end = letters.pop();
    if (start !== end && end !== undefined) {
      return false;
    }
  }
  return true;
}
console.log(palindromeCheck("no x in nixon"));
