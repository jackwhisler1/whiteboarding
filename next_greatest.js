function nextLargerElement(arr) {
  let res = new Array(arr.length).fill(-1);
  const stack = [];
  // res = [-1, -1 ,-1, -1]
  // arr = [13, 7, 6, 12]
  if (arr.length < 2) return res;
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      res[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
  }
  return res;
}
