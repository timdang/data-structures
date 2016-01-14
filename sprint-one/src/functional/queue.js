var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //var count = 0;
  var oldest = 0
  var newest = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    newest++;
    storage[newest] = value;
  };

  someInstance.dequeue = function(){
    oldest++;
    var dequeued = storage[oldest];
    delete storage[oldest];
    return dequeued;
  };

  someInstance.size = function(){
    //super nerdy
    return ((newest - oldest) < 0) ? 0 : newest - oldest;
  };

  return someInstance;
};
//
