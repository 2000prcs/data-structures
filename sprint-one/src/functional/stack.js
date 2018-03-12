var Stack = function() {
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numberOfKey = 0;
  var popped = [];

  instance.push = function(value) {
    storage[numberOfKey] = value;
    numberOfKey++;
  };

  instance.pop = function() {
    // how many keys in the storage
    var keys = Object.keys(storage);
    // store the last value to the popped array 
    popped.push(storage[keys.length - 1]);
    // remove the last value from the storage object
    delete storage[keys.length - 1];
    numberOfKey--;
    // return the last element of popled array
    return popped[poped.length - 1];
  };

  instance.size = function() {
    return Object.keys(storage).length;
  };

  return instance;
};
