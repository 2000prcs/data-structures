var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = Object.create(queueMethods);
  someInstances.keyCounter = 0;
  someInstances.storage = {};
  someInstances.dequeued = [];
  return someInstances;
};

var queueMethods = {};

queueMethods.size = function(){
  return Object.keys(this.storage).length;
}

queueMethods.enqueue = function(value){
  this.storage[this.keyCounter] = value;
  this.keyCounter ++; 
}

queueMethods.dequeue = function(){
  var keys = Object.keys(this.storage);
  this.dequeued.push(this.storage[keys[0]]);
  delete this.storage[keys[0]];
  return this.dequeued[this.dequeued.length - 1];
}


