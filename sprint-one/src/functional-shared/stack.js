var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var someInstances = {};
 someInstances._storage = {};
 someInstances._keyNumber = 0;
 _.extend(someInstances, stackMethods);
 return someInstances;
};

var stackMethods = {};


stackMethods.push = function(value){
  this._storage[this._keyNumber++] = value;
}

stackMethods.pop = function(){
  this._keyNumber && this._keyNumber --;
  var result = this._storage[this._keyNumber];
  delete this._storage[this._keyNumber];
  return result;
}


stackMethods.size = function(){
  return this._keyNumber;
}
