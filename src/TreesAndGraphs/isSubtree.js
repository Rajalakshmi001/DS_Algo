class BT {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const node = new BT(value);
    const queue = [];
    queue.push(this);
    while (queue.length) {
      const currentNode = queue.shift();
      if (!currentNode.left) {
        currentNode.left = node;
        return;
      } else if (!currentNode.right) {
        currentNode.right = node;
        return;
      } else {
        queue.push(currentNode.left, currentNode.right);
      }
    }
  }

  bft(root2) {
    const queue = [this];
    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode.value === root2.value) {
        return currentNode;
      } else {
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
    return false;
  }

  isSubtreeUtil(firstTree, secondTree) {
    const queue1 = [firstTree];
    const queue2 = [secondTree];
    while (queue2.length) {
      if (queue1.length !== queue2.length) return false;
      const node1 = queue1.shift();
      const node2 = queue2.shift();
      if (node1.value !== node2.value) return false;
      else {
        if (node1.left) queue1.push(node1.left);
        if (node1.right) queue1.push(node1.right);
        if (node2.left) queue2.push(node2.left);
        if (node2.right) queue2.push(node2.right);
      }
    }
    return queue1.length !== queue2.length ? false : true;
  }

  isSubtree(t2root) {
    const t1position = this.bft(t2root);
    return this.isSubtreeUtil(t1position, t2root);
  }
}

const a1 = new BT(1);
const a2 = new BT(2);
const a3 = new BT(3);
const a4 = new BT(4);
const a5 = new BT(5);
const a6 = new BT(6);
const a7 = new BT(7);

const b3 = new BT(3);
const b6 = new BT(6);
const b7 = new BT(7);

const c3 = new BT(3);
const c6 = new BT(6);
const c8 = new BT(8);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;

b3.left = b6;
b3.right = b7;

c3.left = c6;
c3.right = c8;

console.log("A tree ", a1);
console.log("B tree ", b3);
console.log("C tree ", c3);

console.log(a1.isSubtree(b3));
console.log(a1.isSubtree(c3));
