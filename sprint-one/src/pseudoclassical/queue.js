var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value){
  this.back++;
  this.storage[this.back] = value;
};

Queue.prototype.dequeue = function(){
  this.front++;
  var dequeued = this.storage[this.front];
  delete this.storage[this.front];
  return dequeued; 
};

Queue.prototype.size = function(){
  return (this.back - this.front < 0) ? 0 : this.back - this.front;
};

var myQueue = new Queue();