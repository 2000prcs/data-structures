var Stack = function() {
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  instance.push = function(value) {
    // increment size as a key of the element
    storage[size++] = value;
  };

  instance.pop = function() {
    // how many keys in the storage
    //store size value and also decrement size
    size && size --;
    // store the element as return value and delete it
    var result = storage[size];
    delete storage[size];
    // return the original element (even if delete it, it's already stored as result)
    return result;
  };

  instance.size = function() {
    return size;
  };

  return instance;
};
