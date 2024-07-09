// 1.
//    Input: "/a//b////c/d//././/.."
//    Output: "/a/b/c"

// 2.
//    Input: "/../"
//    Output: "/"

// 3.
//    Input: "/home//foo/"
//    Output: "/home/foo"
function simplifyPath(path) {
  const chars = path.split("/");
  let directoryStack = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "..") {
      directoryStack.pop();
    } else if (chars[i] === "." || chars[i] === "") {
    } else {
      directoryStack.push(chars[i]);
    }
  }
  let simplifiedPath = [];
  directoryStack.forEach((directory) => {
    simplifiedPath.push("/");
    simplifiedPath.push(directory);
  });
  if (
    simplifiedPath[simplifiedPath.length - 1] === "/" &&
    simplifiedPath.length > 1
  ) {
    simplifiedPath.pop(); // pop off extra '/'
  }
  if (simplifiedPath.length === 0) simplifiedPath.push("/");
  simplifiedPath = simplifiedPath.join("");
  return simplifiedPath;
}
