class Queue {
  constructor() {
    this.items = {};    // لتخزين العناصر بمفاتيح رقمية
    this.head = 0;      // بداية الطابور (أول عنصر)
    this.tail = 0;      // نهاية الطابور (مكان الإضافة التالي)
  }

  // إضافة عنصر إلى نهاية الطابور
  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
    return element;
  }

  // حذف أول عنصر في الطابور
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    const removed = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return removed;
  }

  // إرجاع أول عنصر دون حذفه
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    return this.items[this.head];
  }

  // عدد العناصر في الطابور
  size() {
    return this.tail - this.head;
  }

  // هل الطابور فارغ؟
  isEmpty() {
    return this.size() === 0;
  }

  // طباعة كل عناصر الطابور من أول لآخر
  print() {
    const values = [];
    for (let i = this.head; i < this.tail; i++) {
      values.push(this.items[i]);
    }
    console.log(values.join(" -> "));
  }
}

let q = new Queue();
q.enqueue(5);
q.enqueue(10);
q.enqueue(15);
