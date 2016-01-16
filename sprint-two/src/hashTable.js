var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //i is the index for our array after we hash the key
  var i = getIndexBelowMaxForKey(k, this._limit);
  //should store values that were inserted
  //should overwrite values that have the same key

  //create inner array at index i using .get
  var innerArray = [];

  if (this._storage.get(i) === undefined) {
    innerArray.push([k, v]);
    this._storage.set(i, innerArray);
  } else {
    innerArray = this._storage.get(i);
    //search through inner array at index i for [k, ]

    for (var j = 0; j < innerArray.length; j++) {
      //if k is already in the inner array, update [,v]
      if (innerArray[j][0] === k) {
        innerArray[j][1] = v;
        break;
      } else if (j === innerArray.length - 1) {
        //if k is not found, add [k,v] to inner array
        innerArray.push([k, v]);
      }
    }
    this._storage.set(i, innerArray);
  }

};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  //should not contain values that were removed

  //retrive the inner array at index i using .get
  var innerArray = this._storage.get(i);

  if (innerArray === undefined) {
    return false;
  } else {
    //search through inner array at index i for [k, ]
    for (var j = 0; j < innerArray.length; j++) {
      if (innerArray[j][0] === k) {
        //if found, return [,v]
        return innerArray[j][1];
      }
    }
    //otherwise return null
    return null;
  }

};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);

  //retrive the inner array at index i using .get
  var innerArray = this._storage.get(i);

  if (innerArray === undefined) {
    return true;
  } else {
    //search through inner array at index i for [k, ]
    for (var j = 0; j < innerArray.length; j++) {
      if (innerArray[j][0] === k) {
        var temp = innerArray[j][1];
        //if k is already in the inner array, remove [k,v]
        innerArray.splice(j, 1);
        //perhaps return the removed [,v]
        return temp;
      }
    }
    return null;
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(n)
  retrive: O(n)
  remove: O(n)
 */