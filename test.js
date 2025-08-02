class Queue{
  constructor() {
    this.items = {}
    this.head = 0
    this.tail = 0
    
  }
  enqueue(element){
    this.items[this.tail] = element
    this.tail++
    
    return element
  }
  dequeue(){
    let deletedItem = this.items[this.head]
    delete this.items[this.head]
    this.head++
    return deletedItem
  }
  size(){
    return this.tail - this.head
  }
  isEmpty() {
    return this.tail === this.head;
  }
  peek(){
    return (this.isEmpty ? null : this.items[this.head])
  }
  print(){
    let result = []
    for(let i = this.head; i <= this.tail; i++){
      result.push(this.items[i]);
    }
    console.log(result.join(" ->"));
  }
}
let q = new Queue();
q.enqueue(5);
q.enqueue(10);
q.enqueue(15);
q.print();      // 5 -> 10 -> 15
q.dequeue();    // يحذف 5
q.print();      // 10 -> 15
console.log(q.size()); // 2
console.log(q.peek()); // 10