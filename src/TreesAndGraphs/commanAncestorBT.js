class BT {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  insert(value) {
    const node = new BT(value);
    let queue = [];
    queue.push(this);
    while (queue.length) {
      let currentNode = queue.shift();
      if (!currentNode.left) {
        currentNode.left = node;
        node.parent = currentNode;
        return;
      } else if (!currentNode.right) {
        currentNode.right = node;
        node.parent = currentNode;
        return;
      } else {
        queue.push(currentNode.left, currentNode.right);
      }
    }
  }
}

function commonAncestor(node1, node2) {
  while (node1 && node2) {
    if (node1 === node2) return node1;
    if (node1.parent === node2.parent) {
      return node1.parent;
    } else {
      if (node1.parent) node1 = node1.parent;
      if (node2.parent) node2 = node2.parent;
    }
  }
  return "No common ancestor";
}
let bt = new BT(10);
bt.insert(11);
bt.insert(7);
bt.insert(9);
bt.insert(15);
bt.insert(8);
bt.insert(12);
bt.insert(13);
console.log(bt);
// console.log(bt.bft(bt));
console.log(commonAncestor(bt.right.right, bt.right.left));
