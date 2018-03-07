var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numberOfkey = 0;
  var poped = [];

  // Implement the methods below
  someInstance.push = function(value) {
    storage[numberOfkey] = value;
    numberOfkey++;
  };

  someInstance.pop = function() {
    // how many keys in the storage
    var keys = Object.keys(storage);
    // store the last value to the poped array 
    poped.push(storage[keys.length - 1]);
    // remove the last value from the storage object
    delete storage[keys.length - 1];
    numberOfkey--;
    //console.log('poped after delete', poped);
    // return the last element of popled array
    return poped[poped.length - 1];
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
