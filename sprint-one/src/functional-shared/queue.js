var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = {};
  someInstances._storage = {};
  someInstances._end = 0;
  someInstances._start = 0;
  _.extend(someInstances, queueMethods);
  return someInstances;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this._storage[this._end++] = value;
}

queueMethods.dequeue = function(){
  var result = this._storage[this._start];
  delete this._storage[this._start];
  this.size() && this._start ++;
  return result;
}

queueMethods.size = function(){
  return this._end - this._start;
}