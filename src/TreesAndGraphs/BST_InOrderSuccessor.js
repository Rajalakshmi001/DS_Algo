function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BST(value);
      this.left.parent = this;
    } else this.left.insert(value);
  } else {
    if (!this.right) {
      this.right = new BST(value);
      this.right.parent = this;
    } else this.right.insert(value);
  }
};

BST.prototype.getMinVal = function(logFunc) {
  if (!this.value) return "Empty tree";
  if (!this.left) {
    logFunc(this.value);
    return this;
  } else {
    this.left.getMinVal(logFunc);
  }
};

BST.prototype.getMaxVal = function(logFunc) {
  if (!this.value) return "Empty tree";
  if (!this.right) logFunc(this.value);
  else {
    this.right.getMaxVal(logFunc);
  }
};

function logFunc(value) {
  console.log(value);
}

function inorderSuccessor(node) {
  if (!node) return null;
  if (node.right) return node.right.getMinVal(logFunc);
  else if (node === node.parent.left) return logFunc(node.parent);
  else if (node === node.parent.right) {
    if (!node.left && !node.right) return "No next node";
    return logFunc(node.parent.parent);
  } else return logFunc("No next node");
}

let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log("bst ", bst);
inorderSuccessor(bst.right.right.left);
