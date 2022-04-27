// console.log("Abhishek Verma");
// BFT or Breadth First Traversal or LOT or Level Order Traversal
// in Tree can done using Queue Data Structure

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Simple Implementation of BFT for Binary Tree
const breadFirstTraversal = (rootNode) => {
  const res = [];
  const queue = [rootNode];
  while (queue.length > 0) {
    const curr = queue.shift();
    res.push(curr.val);
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return res;
};

// Modification for LeetCode - Binary Tree Level Order Traversal
const breadthFristTraversalNew = (root) => {
  let result = [];
  currentLevelNodes = [];
  if (root) currentLevelNodes.push(root);
  while (currentLevelNodes.length > 0) {
    current = [];
    let len = currentLevelNodes.length;
    for (let i = 0; i < len; i++) {
      let node = currentLevelNodes.shift();
      current.push(node.val);
      if (node.left) {
        currentLevelNodes.push(node.left);
      }
      if (node.right) {
        currentLevelNodes.push(node.right);
      }
    }
    result.push(current);
  }
  return result;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

// Example of the Binary Tree We are using here

//       a
//     /   \
//     b   c
//   /  \   \
// d     e   f

console.log(breadFirstTraversal(a));
console.log(breadthFristTraversalNew(a));
