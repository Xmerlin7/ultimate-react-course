class queue {
  constructor() {
    this.items = [];
    this.counter = 0;
  }
  enqueue(element) {
    this.items[this.counter] = element;
    this.counter++;
    console.log(this.items.filter((x) => x != null).join("- >"));
    return element;
  }
  isEmpty() {
    return this.counter === 0;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    let deletedItem = this.items.shift();
    console.log(`this is the deleted item ${deletedItem}`);
    this.counter--;
    return deletedItem;
  }
  peek() {
    console.log(`this is the queue first element ${this.items[0]}`);
  }
  size() {
    console.log(`this is the queue size ${this.counter}`);
  }
  print() {
    console.log(this.items.filter((x) => x != null).join("- >"));
  }
}
let queuee = new queue();
queuee.enqueue(7);
queuee.enqueue(6);
queuee.enqueue(5);
queuee.enqueue(5);
queuee.enqueue(5);
queuee.dequeue();
queuee.print();
queuee.size();
queuee.peek();
