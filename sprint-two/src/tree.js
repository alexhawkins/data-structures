var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var subTree = makeTree(value);
  this.children.push(subTree);
};

treeMethods.contains = function(target){
  var result = false;
  if (this.value === target) {
    return true;
  } else {
    if(this.children.length > 0){
      for(var i = 0; i < this.children.length; i++){
        result = this.children[i].contains(target);
        if(result){ return result; }
      }
    }
  }
  return result;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
