// console.log("Binary Search Tree")
// Binary Search Tree
// Implementation of the Binary Search Tree
// Methods of the BST covered in this code -
// 1. Add
// 2. FindMin
// 3. FindMax
// 4. Find
// 5. isPresent
// 6. remove
// 7. isBalanced
// 8. inOrder
// 9. preOrder
// 10. postOrder
// 11. levelOrder

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }

  add(val) {
    if (this.root === null) {
      this.root = new Node(val)
      return
    } else {
      const curr = this.root
      const searchTree = (rootNode) => {
        if (val < rootNode.data) {
          if (rootNode.left === null) {
            rootNode.left = new Node(val)
            return
          }
          return searchTree(rootNode.left)
        } else if (val > rootNode.data) {
          if (rootNode.right === null) {
            rootNode.right = new Node(val)
            return
          }
          return searchTree(rootNode.right)
        } else {
          return null
        }
      }
      return searchTree(curr)
    }
  }

  remove(item) {}

  getTree() {
    return JSON.stringify(this.root, null, 2)
  }
}

const Obj1 = new BST()
Obj1.add(40)
Obj1.add(20)
Obj1.add(60)
Obj1.add(10)
console.log(Obj1.getTree())
