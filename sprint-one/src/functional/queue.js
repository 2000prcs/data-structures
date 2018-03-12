var Queue = function() {
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numberOfKeys = 0;
  var dequeued = [];

  instance.enqueue = function(value) {
    storage[numberOfKeys] = value;
    numberOfKeys ++;
  };

  instance.dequeue = function() {
    var keys = Object.keys(storage);
    dequeued.push(storage[keys[0]]);
    delete storage[keys[0]];
    return dequeued[dequeued.length-1];
  };

  instance.size = function() {
    return Object.keys(storage).length;
  };

  return instance;
};
