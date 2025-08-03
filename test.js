class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  pop() {
    if (!this.head) {
      console.log(" This Linked List is empty");
      return;
    }
    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      return;
    }
    
  }
}
