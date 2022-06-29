// Linked List Implementation
// append and remove are the Most important operation here

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(item) {
    if (this.head === null) {
      this.head = new Node(item)
      return
    }
    let curr = this.head
    while (curr.next !== null) {
      curr = curr.next
    }
    curr.next = new Node(item)
  }

  remove(item) {
    let curr = this.head
    let prev = null
    while (curr !== null) {
      if (curr.val === item) {
        prev.next = curr.next
        return
      }
      prev = curr
      curr = curr.next
    }
    return this.head
  }

  getHead() {
    return this.head
  }

  length() {
    let curr = this.head
    let counter = 0
    while (curr !== null) {
      curr = curr.next
      counter = counter + 1
    }
    return counter
  }

  isEmpty() {
    return this.head === null
  }

  indexOf(item) {
    let curr = this.head
    let counter = 0
    while (curr !== null) {
      if (curr.val === item) {
        return counter
      }
      curr = curr.next
      counter = counter + 1
    }
  }

  elementAt(index) {
    let i = 0
    let curr = this.head
    while (i <= index) {
      if (i === index) {
        return curr.val
      }
      curr = curr.next
      i++
    }
  }

  getLinkedList() {
    return JSON.stringify(this.head, 2, null)
  }
}

var Obj1 = new LinkedList()
Obj1.append("A")
Obj1.append("B")
Obj1.append("C")
Obj1.append("D")
Obj1.append("E")
console.log(Obj1.getLinkedList())
Obj1.remove("D")
console.log(Obj1.getLinkedList())
// console.log(Obj1.length())
// console.log(Obj1.isEmpty())
// console.log(Obj1.indexOf("B"))
// console.log(Obj1.elementAt(1))
// console.log(Obj1)
