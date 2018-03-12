var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  //children is an array. Add child should add a child array to the tree object
  newTree.children = []; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
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
          recursiveFunc(start[i].children);
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
