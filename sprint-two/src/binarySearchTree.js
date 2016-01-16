var BinarySearchTree = function(value) {

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

binaryTreeMethods.insert = function(value) {
  // accepts a value and places in the tree in the correct position

  //compare value to .this (current node)
  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    }
    this.left.insert(value);
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    }
    this.right.insert(value);
  }
};
//if smaller, traverse to left child node

//recursively call as need

//in larger, traverse to right child node

//recursively call as need

//insert value

binaryTreeMethods.contains = function(value) {
  // accepts a value and returns a boolean reflecting whether or not the value is contained in the tree

  //compare value to .this (current node)
  if (this.value === value) {
    return true;
  } else if (this.value > value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(value);
  } else if (this.value < value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(value);
  }
  //if smaller, traverse to left child node

  //recursively call as need

  //in larger, traverse to right child node

  //recursively call as need

  //once found, return true

};

binaryTreeMethods.depthFirstLog = function(callback) {
  // accepts a callback and executes it on every value contained in the tree
  callback(this.value);
  // if this has a left - call depthFirstLog on this.left
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  // else if this has a right - call depthFirstLog on this.right
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
  //if this does not have a right - call callback on value;


  //this is going to be challenging. How to recursively call so in traverses entire tree. In example provided for testing, to executes on exisitng node, then left child, then right of that child.
};

binaryTreeMethods.closestTo = function(value) {
  var leftcheck = null;
  var rightcheck = null;

  var checkValues = function(binaryTree, value){
    if (this.value > value) {
      if (this.left === null) {
        leftcheck = this.value;
      } else {
        return this.left.checkValues(value);
      }
    } else if (this.value < value) {
      if (this.right === null) {
        rightcheck = this.value;
      } else {
        return this.right.checkValues(value);
      }
    }
  }

  if (this.contains(value)){
    return value;
  }else{
    
  }

  console.log("value: "+value);
    console.log("rightcheck: " +rightcheck);
      console.log("leftcheck: "+leftcheck);
  return ((value - leftcheck) >= (rightcheck - value)) ? rightcheck : leftcheck;

};
/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log n)
contains: O(log n)
depthFirstLog: O(log n)
 */