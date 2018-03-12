var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = {};
  someInstances.storage = {};
  someInstances.end = 0;
  someInstances.start = 0;
  _.extend(someInstances, queueMethods);
  return someInstances;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.end - this.start;
}

queueMethods.enqueue = function(value){
  this.storage[this.end++] = value;
}

queueMethods.dequeue = function(){
  var result = this.storage[this.start];
  delete this.storage[this.start];
  this.size() && this.start ++;
  return result;
}


