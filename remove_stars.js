function removeStars(s) {
  let starlessStack = [];
  const chars = s.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== "*") starlessStack.push(chars[i]);
    else if (chars[i] === "*" && chars[i - 1] !== "*") {
      starlessStack.pop();
    }
  }
  return starlessStack.join("");
}
console.log(removeStars("ab*c*d"));
/*
Given a string s, where * represents a star. We can remove a star along with its closest non-star character to its left in a single operation.

The task is to perform as many such operations as possible until all stars have been removed and return the resultant string.
*/
