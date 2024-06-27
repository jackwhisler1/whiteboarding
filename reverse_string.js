function reverseString(s) {
  const stringChars = s.split("");
  let reversed = [];
  stringChars.forEach((l) => {
    reversed.unshift(l);
  });
  s = reversed.join("");
  return s;
}
