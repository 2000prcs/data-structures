var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    list.tail = Node(value);
    if (list.head === null) {
    //if there is no head, the list is empty. 
      list.head = list.tail;
    //Set head equal to tail initially, except tail.next is equal to 
      list.head.next = value;
      }
    
    // this.tail.value = value;
  };

  list.removeHead = function() {
    // var head = Node();
    // var rememberHead = list.head;
    list.head = null;
    
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
Node(4)