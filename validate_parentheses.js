function isValid(s) {
  // ToDo: Write Your Code Here.
  const chars = s.split("");
  let charsStack = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "{") {
    } else if (chars[i] === "[") {
      if (chars[chars.length - 1] === "]") chars.pop();
      else return false;
    } else if (chars[i] === "(") {
      if (chars[chars.length - 1] === ")") chars.pop();
      else return false;
    } else return false;
  }
  return true;
}
//"{[()]}"
