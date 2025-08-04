class HashTable {
  constructor(size) {
    this.size = size;
    this.array = new Array(size);
  }
  _hash(key) {
    let hashed = 0;
    for (let i = 0; i < key.length; i++) {
      hashed += key[i].charCodeAt(0);
    }
    return hashed % this.size;
  }
  set(key, value) {
    let index = this._hash(key);
    this.array[index] = value;
  }
  print() {
  let tableValues = [];
  for (let i = 0; i < this.array.length; i++) {
    if (this.array[i] != null) {
      tableValues.push(`${this.array[i]} at ${i}`);
    }
  }
  console.log(
    `The numbers in the HashTable are: \n ${tableValues.join(" -> ")}`);
}

}
let hash = new HashTable(50);
hash.set("Seif", 30);
hash.set("Seif", 40);
hash.print();
