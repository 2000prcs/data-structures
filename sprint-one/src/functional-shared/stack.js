var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var someInstances = {};
 someInstances.storage = {};
 someInstances.keyNumber = 0;
 _.extend(someInstances, stackMethods);
 return someInstances;
};

var stackMethods = {};


stackMethods.push = function(value){
  this.storage[this.keyNumber++] = value;
}

stackMethods.pop = function(){
  this.keyNumber && this.keyNumber --;
  var result = this.storage[this.keyNumber];
  delete this.storage[this.keyNumber];
  return result;
}


stackMethods.size = function(){
  console.log(this);
  return this.keyNumber;
}
