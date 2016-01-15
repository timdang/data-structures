var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  if (!this.children) {
    this.children = [];
  }
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //if value current tree contains value

  if (this.value === target) {
    return true;
    //return true
  } else if (this.children !== null) {
     for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)){
        return true;
      }
    } 
  } return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild = O(1)
  contains = O(n^2)
 */
