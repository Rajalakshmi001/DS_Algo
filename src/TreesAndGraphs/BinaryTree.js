class BT {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const node = new BT(value);
    let queue = [];
    queue.push(this);
    while (queue.length) {
      let currentNode = queue.shift();
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

  bft(root) {
    if (root.left) root.left = this.bft(root.left);
    console.log(root.value);
    if (root.right) root.right = this.bft(root.right);
  }
}
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next) {
  this.value = value;
  this.next = next;
}

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

function listOfDepths(root) {
  if (!root) return null;
  const arrayOfLL = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const ll = new LinkedList();
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      ll.addToTail(queue[0].value);
      if (queue[0].left) queue.push(queue[0].left);
      if (queue[0].right) queue.push(queue[0].right);
      queue.shift();
    }
    arrayOfLL.push(ll);
  }
  return arrayOfLL;
}
var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let leftHeight = minDepth(root.left);
  let rightHeight = minDepth(root.right);
  return (
    Math.min(
      leftHeight !== 0 ? leftHeight : rightHeight,
      rightHeight !== 0 ? rightHeight : leftHeight
    ) + 1
  );
};

const maxDepth = function(root) {
  if (!root) return 0;
  const leftDepth = getDepth(root.left, 1);
  const rightDepth = getDepth(root.right, 1);
  return Math.max(leftDepth, rightDepth);
};

function getDepth(tree, depth) {
  if (!tree) return 0;
  if (tree) depth++;
  let leftDepth = 0,
    rightDepth = 0;
  while (tree.left || tree.right) {
    depth++;
    if (tree.left) {
      tree = tree.left;
      leftDepth = getDepth(tree, depth);
    }
    if (tree.right) {
      tree = tree.right;
      rightDepth = getDepth(tree, depth);
    }
  }
  return Math.max(leftDepth, rightDepth, depth);
}

let myMap = new Map();

function verticalSumUtil(tree, horizontalDepth) {
  if (!tree) return 0;
  if (!myMap.get(horizontalDepth)) myMap.set(horizontalDepth, 0);
  myMap.set(horizontalDepth, myMap.get(horizontalDepth) + tree.value);
  verticalSumUtil(tree.left, horizontalDepth - 1);
  verticalSumUtil(tree.right, horizontalDepth + 1);
}

function verticalSum(tree, horizontalDepth = 0) {
  verticalSumUtil(tree, horizontalDepth);
  return myMap.get(0);
}

function verticalTravUntil(tree, myMap, hd = 0, vd = 0) {
  if (!tree) return 0;
  if (!myMap[hd]) myMap[hd] = {};
  if (!myMap[hd][vd]) myMap[hd][vd] = [];
  myMap[hd][vd].push(tree.value);
  verticalTravUntil(tree.left, myMap, hd - 1, vd + 1);
  verticalTravUntil(tree.right, myMap, hd + 1, vd + 1);
}

var verticalTraversal = function(root) {
  let map = {};
  verticalTravUntil(root, map);
  let result = [];
  console.log(map);
  let keys = Object.keys(map).sort((a, b) => a - b);
  for (let key of keys) {
    let column = [];
    let columnKeys = Object.keys(map[key]).sort((a, b) => a - b);
    for (let col of columnKeys) {
      map[key][col] = map[key][col].sort((a, b) => a - b);
      column.push(map[key][col]);
    }
    result.push(column);
  }
  return result;
};

function maxWidth(root) {
  if (!root) return null;
  const queue = [];
  queue.push(root);
  let arrayWidths = [];
  while (queue.length) {
    const queueLength = queue.length;
    arrayWidths.push(queueLength);
    for (let i = 0; i < queueLength; i++) {
      if (queue[0].left) {
        queue.push(queue[0].left);
      } else queue.push(null);
      if (queue[0].right) queue.push(queue[0].right);
      queue.shift();
    }
  }
  return Math.max(...arrayWidths);
}
let bt = new BT(1);
bt.insert(3);
bt.insert(2);
bt.left.left = new BT(5);
// bt.left.left.left = new BT(6);
// bt.right.right = new BT(9);
// bt.right.right.right = new BT(7);
console.log(bt);
console.log(verticalTraversal(bt));
