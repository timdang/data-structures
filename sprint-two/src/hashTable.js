var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //i is the index for our array after we hash the key
  var i = getIndexBelowMaxForKey(k, this._limit);

  //create inner array at index i
  

  //search inner array at index i for [k, ]

    //if k is already in the inner array, update [,v]
    //should overwrite values that have the same key

    //if k is not found, add [k,v] to inner array
    //should store values that were inserted
  
 
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //return this._storage.get(i) ? this._storage.get(i)[1] : null;
  
  //search inner array at index i for [k, ]

    //if found, return [,v]

    //otherwise return null
  

  //should not contain values that were removed
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  //search inner array at index i for [k, ]

    //if k is already in the inner array, remove [k,v]

    //perhaps return the removed [,v]
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
