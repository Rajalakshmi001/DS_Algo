var BST = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BST.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};

const bstSequences = function(root) {
  let sequences = [];
  var recurse = function(nodes, travelled) {
    let noChild = true;
    nodes.forEach(node => {
      if (node.left !== null && travelled[node.left.value] === undefined) {
        noChild = false;
        travelled[node.left.value] = true;
        recurse(nodes.concat([node.left]), travelled);
        delete travelled[node.left.value];
      }
      if (node.right !== null && travelled[node.right.value] === undefined) {
        noChild = false;
        travelled[node.right.value] = true;
        recurse(nodes.concat([node.right]), travelled);
        delete travelled[node.right.value];
      }
    });
    if (noChild) {
      sequences.push(nodes.map(node => node.value));
    }
  };
  let startTravelled = {};
  startTravelled[root.value] = true;
  recurse([root], startTravelled);
  return sequences;
};
/* TEST */

/* 1, 2, 3, 4, 5, 6, 7 */

var b = new BST(2);
b.insert(1);
b.insert(4);
b.insert(3);
b.insert(5);
console.log(b);
console.log(bstSequences(b));
