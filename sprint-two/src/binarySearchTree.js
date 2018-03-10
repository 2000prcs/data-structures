var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  tree.storage = {};
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(newValue){
  var childTree = BinarySearchTree(newValue);
  this.storage[newValue] = childTree;
  // console.log(this);
  // debugger;
  //   console.log(this, childTree);
      var findSpot = function(node){
        if(node.value > newValue){
          if(node.left === null){
            node.left = childTree;
            //childTree.left = newValue;
            return;
          } else {
            findSpot(node.storage[node.value]);
          }
        } else {
          if(node.right === null){
            node.right = childTree;
            //childTree.right = newValue;
            return;
          } else {
            findSpot(node.storage[node.value]);
          }
        }
      }
  findSpot(this);
  console.log('left', this.left);
  console.log('right', this.right);
  console.log('this', this);
  // console.log(this);
};


binaryTreeMethods.contains = function(value){
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
};

binaryTreeMethods.depthFirstLog = function(callback){
  //accepts a callback and executes it on every value contained in the tree.

};