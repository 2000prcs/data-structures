

// Instantiate a new graph
var Graph = function() {
  
};

//Add Graph properties


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //debugger;
  var nodeString = "" + node;
  var nodeObject = {}; 
  nodeObject.value = node;
  this[nodeString] = nodeObject;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this["" + node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this["" + node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this["" + fromNode] === undefined || this["" + toNode] === undefined){return false;}
  if(this["" + fromNode].edge !== undefined && this["" + toNode].edge !== undefined){
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  console.log('addEdge', this);
  this["" + fromNode].edge = [];
  this["" + toNode].edge = [];
  //console.log(this);
  //console.log(this["" + fromNode].edge);
  this["" + fromNode].edge.push(toNode);
  this["" + toNode].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
//   this["" + fromNode].edge = this["" + fromNode].edge.filter(function(val) {
//     val !== toNode
//   });
//   this["" + toNode].edge = this["" + toNode].edge.filter(function(val) {
//     val !== fromNode
//   });
// console.log(this["" + fromNode].edge);
// console.log(this["" + toNode].edge);
  delete this["" + fromNode].edge;
  delete this["" + toNode].edge; 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through object to invoke callback per each node

  // console.log(this);
  // var result;
  // function closure(){
  //   console.log(cb);
  //   result = cb.apply(this, arguments);
  //   var args = [...arguments]
  //   console.log(args);
  // }
  // closure();
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



















