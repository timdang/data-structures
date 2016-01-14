var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.count = 0;
  stackInstance.storage = {};

  return stackInstance;

};

var stackMethods = {};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--;
  }
  var popped = this.storage[this.count];
  delete this.storage[this.count];
  return popped;
};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.size = function() {
  return this.count;
};