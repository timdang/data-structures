// ###Graph Solution

// Instantiate a new graph
var Graph = function() {
  // this.nodes = {};
  // this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (key === node) {
      return true;
    }
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in node) {
    [key].node = false;
  }
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode][toNode] || false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!!this[fromNode] && !!this[toNode]) {
    // add edge
    this[fromNode][toNode] = true;
    this[toNode][fromNode] = true;
    // this[toNode].edges.push(fromNode);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!!this[fromNode] && !!this[toNode]) {

    this[fromNode][toNode] = false;
    this[toNode][fromNode] = false;
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this){
    cb(key);
  };
};
/*
 * Complexity: What is the time complexity of the above functions?
 */



