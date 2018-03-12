var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
  
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var assertEqualValues = function(actual, expected, testName){
  if(expected === output){
    console.log(`PASSED [${testName}]`);
  }
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
}

assertEqualValues()