function isValid(s) {
  const chars = s.split("");
  console.log(chars);
  const charsStack = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "{" || chars[i] === "(" || chars[i] === "[") {
      charsStack.unshift(chars[i]);
    } else if (chars[i] === "}") {
      if (charsStack[0] !== "{") {
        console.log("1", charsStack);
        return false;
      }
      charsStack.shift();
    } else if (chars[i] === ")") {
      if (charsStack[0] !== "(") {
        console.log("2", charsStack);
        return false;
      }
      charsStack.shift();
    } else if (chars[i] === "]") {
      if (charsStack[0] !== "[") {
        console.log("3", charsStack);
        return false;
      }
      charsStack.shift();
    }
  }
  if (charsStack.length === 0) {
    return true;
  } else return false;
}
console.log(isValid("{[()]}"));
