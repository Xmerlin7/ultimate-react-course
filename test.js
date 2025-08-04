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
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
  }
  shift() {
    if (!this.head) {
      console.log(" This Linked List is empty");
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    // CG will take care of it
    this.head = this.head.next;
  }
  unshift(value) {
    if (!this.head) {
      this.push(value);
      return;
    }
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  print(){
    if (!this.head) {
      console.log(" This Linked List is empty");
      return;
    }
    let currentNode = this.head
    let result = []
    while(currentNode){
      result.push(currentNode.value)
      currentNode = currentNode.next
      
    }
    console.log(`The current values of linked list are ${result.join(" -> ")}`);
  }
  size(){
    if (!this.head) {
      console.log(" This Linked List is empty");
      return;
    }
    let currentNode = this.head
    let ctr = 0;
    while(currentNode){
      ctr++
      currentNode = currentNode.next
    }
    console.log(`The size of linked list is ${ctr}`)
  }
}
let list = new List()
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.unshift(4)
list.print()
list.size()
list.shift()
list.print()
list.pop()
list.print()
list.size()