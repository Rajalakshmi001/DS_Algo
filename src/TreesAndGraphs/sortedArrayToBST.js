function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

TreeNode.prototype.insert = function(value) {
  if (value <= this.val) {
    if (!this.left) this.left = new TreeNode(value);
    else this.left.insert(value);
  } else {
    if (!this.right) this.right = new TreeNode(value);
    else this.right.insert(value);
  }
};

// var sortedArrayToBST = function(nums) {
//   if (!nums || !nums.length) return null;
//   let mid = Math.floor(nums.length / 2);
//   let left = mid - 1,
//     right = mid + 1,
//     queue = [nums[mid]],
//     tree;
//   while (queue.length) {
//     let currentElement = queue.shift();
//     if(!tree) {
//       tree = new TreeNode(currentElement);
//     } else {
//       tree.insert(currentElement);
//     }
//     if (left > -1) {
//       queue.push(nums[left]);
//       left--;
//     }
//     if (right < nums.length) {
//       queue.push(nums[right]);
//       right++;
//     }
//   }
//   return tree;
// };
var sortedArrayToBST = function(nums, start = 0, end = nums.length - 1) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(mid, end)
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums, start, mid - 1);
    root.right = sortedArrayToBST(nums, mid + 1, end);
    return root;
  }
  return null;
};
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
