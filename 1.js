// Linked List Implementation

class Node {
  constructor(element) {
    this.element = element;
    this.next = this.next;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  //   Node(element) {
  //     this.element = element;
  //     this.next = null;
  //   }

  size() {
    return this.length;
  }

  getLinkedList() {
    return JSON.stringify(head);
  }

  add(element) {
    var node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }
}

var X = new LinkedList();
X.add("H");
X.add("E");
X.add("L");
X.add("L");
console.log(X.getLinkedList());
