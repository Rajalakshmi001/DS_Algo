function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BST(value);
      values.push(this.left);
    } else this.left.insert(value);
  } else {
    if (!this.right) {
      this.right = new BST(value);
      values.push(this.right);
    } else this.right.insert(value);
  }
};

BST.prototype.getRandomNode = function(logFunc) {
  let random = Math.random();
  console.log(Math.floor((values.length - 1) * random));
  logFunc(values[Math.floor((values.length - 1) * random)]);
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

BST.prototype.getMinVal = function(logFunc) {
  if (!this.value) return "Empty tree";
  if (!this.left) {
    logFunc(this.value);
    return this;
  } else {
    this.left.getMinVal(logFunc);
  }
};
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
    let aux = node.right.getMinVal(logFunc);
    node.value = aux.value;

    node.right = removeNode(node.right, aux.value);
    return node;
  }
}

function logFunc(value) {
  console.log(value);
}

let bst = new BST(50);
let values = [];
values.push(bst);
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
bst.search(logFunc, 50);
removeNode(bst, 100);
console.log("bst ", bst);
bst.getRandomNode(logFunc);
