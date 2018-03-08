var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var someInstances = {};
 someInstances.storage = {};
 someInstances.keyCounter = 0;
 someInstances.popped = [];
 _.extend(someInstances, stackMethods);
 return someInstances;
};

var stackMethods = {};


stackMethods.push = function(value){
  this.storage[this.keyCounter] = value;
  this.keyCounter ++;
}

stackMethods.pop = function(){
  var keys = Object.keys(this.storage);
  console.log(keys);
  this.popped.push(this.storage[keys.length - 1]);
  // console.log(this.popped);
  delete this.storage[keys.length - 1];
  this.keyCounter --;
  return this.popped[this.popped.length - 1];
}


stackMethods.size = function(){
  return Object.keys(this.storage).length;
}
