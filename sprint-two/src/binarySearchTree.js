var BinarySearchTree = function(value){

 //This is all my code. Will need to evaluate if needed, relevant.
 //Derived from tree.js

  var newTree = {};
  
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, binaryTreeMethods);
  return newTree;

};
var binaryTreeMethods = {};

binaryTreeMethods.left = function(value){
// binary search tree (BST) where all values are lower than than it the current value
 

};

binaryTreeMethods.right = function(value){
// BST where all values are higher than than it the current value.

};

binaryTreeMethods.insert = function(value){
// accepts a value and places in the tree in the correct position

  //compare value to .this (current node)

    //if smaller, traverse to left child node

          //recursively call as need
 
    //in larger, traverse to right child node

         //recursively call as need
 
    //insert value

};

binaryTreeMethods.contains = function(value){
// accepts a value and returns a boolean reflecting whether or not the value is contained in the tree

};

binaryTreeMethods.depthFirstLog = function(callback){
// accepts a callback and executes it on every value contained in the tree
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
