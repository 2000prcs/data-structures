var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = Object.create(stackMethods);
  someInstances.storage = {};
  someInstances.keyCounter = 0;
  someInstances.popped = [];
  return someInstances;
};

var stackMethods = {};

stackMethods.size = function(){
  return Object.keys(this.storage).length;
}

stackMethods.push = function(value){
  this.storage[this.keyCounter] = value;
  this.keyCounter ++;
}

stackMethods.pop = function(){
  var keys = Object.keys(this.storage);
  this.popped.push(this.storage[keys.length - 1]);
  delete this.storage[keys.length - 1];
  this.keyCounter --;
  return this.popped[this.popped.length - 1];
}


