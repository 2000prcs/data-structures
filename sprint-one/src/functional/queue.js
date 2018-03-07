var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numberOfKeys = 0;
  var dequeued = [];

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[numberOfKeys] = value;
    numberOfKeys ++;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    dequeued.push(storage[keys[0]]);
    delete storage[keys[0]];
    return dequeued[dequeued.length-1];
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
