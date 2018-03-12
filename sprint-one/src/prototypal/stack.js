var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = Object.create(stackMethods);
  someInstances._storage = {};
  someInstances._keyCounter = 0;
  return someInstances;
};

var stackMethods = {};

stackMethods.push = function(value){
  this._storage[this._keyCounter++] = value;
}

stackMethods.pop = function(){
  this._keyCounter && this._keyCounter--;
  var result = this._storage[this._keyCounter];
  delete this._storage[this._keyCounter];
  return result;
}

stackMethods.size = function(){
  return this._keyCounter;
}