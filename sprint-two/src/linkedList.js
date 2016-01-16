var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //should designate a new tail when new nodes are added
    var newnode = Node(value);

    if (list.head === null) {
      list.head = newnode;
      list.tail = newnode;
    } else {
      list.tail.next = newnode;
      list.tail = newnode;
    }

  };

  list.removeHead = function() {
    //should remove the head from the list when removeHead is called
    //should return the value of the former head when removeHead is called
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;

  };

  list.contains = function(target) {
    //should contain a value that was added
    //should not contain a value that was removed

    //start at the head of the list
    var currentnode = list.head;
    //contine until the final
    while (currentnode !== null) {
      if (currentnode.value === target) {
        return true;
      } else {
        currentnode = currentnode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail = O(1)
 removeHead = O(1)
 contains = O(n)
 */