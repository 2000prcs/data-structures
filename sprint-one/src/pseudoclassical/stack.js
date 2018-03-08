var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keyCounter = 0;
  this.popped = [];
};

Stack.prototype.size = function(){
  return Object.keys(this.storage).length;
}

Stack.prototype.push = function(value){
  this.storage[this.keyCounter] = value;
  this.keyCounter ++;
}

Stack.prototype.pop = function(){
  var keys = Object.keys(this.storage);
  this.popped.push(this.storage[keys.length - 1]);
  delete this.storage[keys.length - 1];
  this.keyCounter --;
  return this.popped[this.popped.length - 1];
}
//new keyword also returns automatically
var NewInstance = new Stack();


