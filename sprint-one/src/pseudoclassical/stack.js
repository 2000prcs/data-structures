var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._keyCounter = 0;
};

Stack.prototype.push = function(value){
  this._storage[this._keyCounter++] = value;
}

Stack.prototype.pop = function(){
  this._keyCounter && this._keyCounter --;
  var result = this._storage[this._keyCounter];
  delete this._storage[this._keyCounter];
  return result;
}

Stack.prototype.size = function(){
  return this._keyCounter;
}

//new keyword also returns automatically
var NewInstance = new Stack();


