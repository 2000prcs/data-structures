var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  //children is an array. Add child should add a child array to the tree object
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.value = value;
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var found = false;
  var recursiveFunc = function(start) {
      for(var i = 0; i < start.length; i ++){
        if(start[i].value === target){
          found = true;
          return found;
        } else {
          found = false;
          recursiveFunc(start[i]);
        }
      }  
      return found;
    }
  found = recursiveFunc(this.children);
  return found;
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