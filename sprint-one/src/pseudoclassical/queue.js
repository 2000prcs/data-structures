var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keyCounter = 0;
  this.dequeued = [];
};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
}

Queue.prototype.enqueue = function(value){
  this.storage[this.keyCounter] = value;
  this.keyCounter ++;
}

Queue.prototype.dequeue = function(){
  var keys = Object.keys(this.storage);
  this.dequeued.push(this.storage[keys[0]]);
  delete this.storage[keys[0]];
  return this.dequeued[this.dequeued.length - 1];
}

var NewInstance = new Queue();


