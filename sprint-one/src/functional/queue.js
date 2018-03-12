var Queue = function() {
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // start counter for dequeue -> counting from the start 
  var start = 0;
  // end counter for enqueue -> counting from the end 
  var end = 0;

  instance.enqueue = function(value) {
    // adding elements from the end 
    storage[end++] = value;
  };

  instance.dequeue = function() {
    // storing element from the start 
    var result = storage[start];
    // delete the element (value is stored in result)
    delete storage[start];
    // if itmes removed are larger than items added, it should report '0'
    // by calling size() method here, it stores the return value *** closure ***
    instance.size() && start ++;
    return result;
  };

  instance.size = function() {
    // calculate how many items left 
    return end - start;
  };

  return instance;
};
