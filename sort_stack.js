function sortStack(stack) {
  let tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] <= temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }

  return stack;
}
