var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //i is the index for our array after we hash the key
  var i = getIndexBelowMaxForKey(k, this._limit);

  //create inner array at index i using .get
  var innerArray = []; 
  
  //search through inner array at index i for [k, ]
  if (this._storage.get(i) === undefined){
    innerArray.push([k,v]);
    this._storage.set(i, innerArray);
  }else{
    innerArray = this._storage.get(i);
    for (var j = 0; j < innerArray.length; j++){
      if (innerArray[j][0] === k){
        innerArray[j][1] = v;
        break;
      }else if (j === innerArray.length -1){
        innerArray.push([k,v]);
      }
    }
    this._storage.set(i, innerArray);
  }
    //if k is already in the inner array, update [,v]
    //should overwrite values that have the same key

    //if k is not found, add [k,v] to inner array
    //should store values that were inserted
 
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //retrive the inner array at index i using .get
  var innerArray = this._storage.get(i);

  if (innerArray === undefined){
    return false;
  }else{
    for (var j = 0; j < innerArray.length; j++){
      if (innerArray[j][0] === k){
        return innerArray[j][1];
      }
    } return null;
  }
  //search through inner array at index i for [k, ]
  
    //if found, return [,v]

    //otherwise return null
  

  //should not contain values that were removed
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //retrive the inner array at index i using .get
  var innerArray = this._storage.get(i);

  if (innerArray === undefined){
    return true;
  }else{
    //search through inner array at index i for [k, ]
    for (var j = 0; j < innerArray.length; j++){
      if (innerArray[j][0] === k){
        var temp = innerArray[j][1];
        innerArray.splice(j, 1);
        return temp;
      }
    } return null;
  }


    //if k is already in the inner array, remove [k,v]

    //perhaps return the removed [,v]
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert: 
  retrive:
  remove: å
 */
