class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  checkPathSums(value, path) {
    let pathCount = 0;
    if (path === undefined) {
      path = [this.value];
    } else {
      path = [...path, this.value];
    }
    if (arraySum(path) === value) {
      pathCount++;
    }
    if (this.left) pathCount += this.left.checkPathSums(value, path);
    if (this.right) pathCount += this.right.checkPathSums(value, path);
    return pathCount;
  }

  checkSums(value) {
    let pathCount = 0;
    pathCount += this.checkPathSums(value);
    if (this.left) pathCount += this.left.checkPathSums(value);
    if (this.right) pathCount += this.right.checkPathSums(value);
    return pathCount;
  }
}
function arraySum(path) {
  return path.reduce((total, node) => total + node, 0);
}

var a = new BinaryTree(1);
var b = new BinaryTree(1);
var c = new BinaryTree(1);
var d = new BinaryTree(10);

a.left = b;
a.right = c;
c.left = d;
console.log(a);
console.log(a.checkSums(12), 1);
console.log(a.checkSums(2), 2);
console.log(a.checkSums(1), 3);
