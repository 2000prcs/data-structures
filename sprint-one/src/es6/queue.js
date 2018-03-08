class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.keyCounter = 0;
    this.dequeued = [];
  }

  size(){
    return Object.keys(this.storage).length;
  }

  enqueue(value){
    this.storage[this.keyCounter] = value;
    this.keyCounter ++;
  }

  dequeue(){
    var keys = Object.keys(this.storage);
    this.dequeued.push(this.storage[keys[0]]);
    delete this.storage[keys[0]];
    return this.dequeued[this.dequeued.length - 1];
  }
}

var newInstance = new Queue();