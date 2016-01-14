var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);

  queueInstance.front = 0;
  queueInstance.back = 0;
  queueInstance.storage = {};

  return queueInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.back++;
  this.storage[this.back] = value;
};

queueMethods.dequeue = function(){
  this.front++;
  var dequeued = this.storage[this.front];
  delete this.storage[this.front];
  return dequeued; 
};

queueMethods.size = function(){
  return (this.back - this.front < 0) ? 0 : this.back - this.front;
};
