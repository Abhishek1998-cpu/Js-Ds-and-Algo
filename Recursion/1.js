class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  getLinkedList() {
    // return JSON.stringify(this.root, null, 2);
    return JSON.stringify(this.root);
  }

  addNode(newNode) {
    if (this.root == null) {
      this.root = new Node(newNode);
    } else {
      const addNewNode = (rootNode) => {
        if (rootNode.next == null) {
          rootNode.next = new Node(newNode);
          return;
        } else {
          return addNewNode(rootNode.next);
        }
      };
      return addNewNode(this.root);
    }
  }
}

var SampleNode = new LinkedList();
SampleNode.addNode(100);
SampleNode.addNode(90);
SampleNode.addNode(80);
SampleNode.addNode(1123);
console.log(SampleNode.getLinkedList());
