function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

let isBST = function(node) {
  if (node.left) {
    if (node.left.value <= node.value) return isBST(node.left);
    else return false;
  } else if (node.right) {
    if (node.right.value > node.value) return isBST(node.right);
    else return false;
  }
  return true;
};

let sortedArray = [];

BST.prototype.depthFirstTraversal = function(logFunc, order) {
  if (order === "pre-order") logFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(logFunc, order);
  if (order === "in-order") {
    // logFunc(this.value);
    sortedArray.push(this.value);
  }
  if (this.right) this.right.depthFirstTraversal(logFunc, order);
  if (order === "post-order") logFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(logFunc) {
  let queue = [this];
  while (queue.length) {
    let currentNode = queue.shift();
    logFunc(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
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

BST.prototype.search = function(logFunc, value) {
  if (this.value === value) logFunc(value);
  else if (this.value > value) {
    if (!this.left) logFunc("Value not found");
    else this.left.search(logFunc, value);
  } else {
    if (!this.right) logFunc("Value not found");
    else this.right.search(logFunc, value);
  }
};

const balance = function(arr, start, end) {
  if (arr.length === 1) return new BST(arr[0]);
  if (arr.length === 0) return null;
  let mid = Math.floor(arr.length / 2);
  let currentNode = new BST(arr[mid]);
  currentNode.left = balance(arr.slice(0, mid));
  currentNode.right = balance(arr.slice(mid + 1, arr.length));
  return logFunc(currentNode);
};

function checkHeight(root) {
  if (!root) return -1;
  let leftHeight = checkHeight(root.left);
  if (leftHeight === -Infinity) return -Infinity;
  let rightHeight = checkHeight(root.right);
  if (rightHeight === -Infinity) return -Infinity;
  let heightDiff = Math.abs(leftHeight - rightHeight);
  return heightDiff > 1 ? -Infinity : Math.max(leftHeight, rightHeight) + 1;
}

function checkBalanced(root) {
  return checkHeight(root) !== -Infinity;
}

// Method to remove node with a
// given data
// it recurrs over the tree to find the
// data and removes it
function removeNode(node, key) {
  // if the root is null then tree is
  // empty
  if (node === null) return null;
  // if value to be delete is less than
  // roots value then move to left subtree
  else if (key < node.value) {
    node.left = removeNode(node.left, key);
    return node;
  }

  // if value to be delete is greater than
  // roots value then move to right subtree
  else if (key > node.value) {
    node.right = removeNode(node.right, key);
    return node;
  }

  // if value is similar to the root's value
  // then delete this node
  else {
    // deleting node with no children
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // deleting node with one children
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }

    // Deleting node with two children
    // minumum node of the rigt subtree
    // is stored in aux
    var aux = node.right.getMinVal(logFunc);
    node.value = aux.value;

    node.right = removeNode(node.right, aux.value);
    return node;
  }
}

function logFunc(value) {
  console.log(value);
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

// console.log(bst);
// bst.depthFirstTraversal(logFunc, "in-order");
// bst.breadthFirstTraversal(logFunc);
// bst.getMinVal(logFunc);
// bst.getMaxVal(logFunc);
// bst.search(logFunc, 20);
// console.log(sortedArray);
// blancedBST.balance(sortedArray, 0, sortedArray.length - 1);
// balance(sortedArray);
// console.log(isBST(bst));
console.log("bst ", bst);
// checkBalanced(bst);
console.log(removeNode(bst, 100));
