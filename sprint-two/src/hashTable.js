

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._totalItems = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
    } else {
    this._storage[index].push([k, v]);
    }
  this._totalItems += 1;
  //check totalItems/limit
  //call resize func
  if((this._totalItems / this._limit) > 0.75) {
    this._limit = this._limit*2;
    var oldStorage = this._storage;
    this._totalItems = 0;
    this._storage = LimitedArray(this._limit);
    for(var key in oldStorage){
      if(typeof oldStorage[key] !== 'function'){
        for(var i= 0; i< oldStorage[key].length; i++) {
          this.insert(...oldStorage[key][i]); //...[k, v]
        }
      }
    }
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var res;
  for(var key in this._storage) {
    if(typeof this._storage[key] !== "function") {
      this._storage[key].forEach( function(val) {
        if(val[0] === k){
          res = val[1];
        }
      })
    }
  }
  return res;
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i=0; i<this._storage[index].length; i++){
    if(this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
  this._totalItems -= 1;
  if((this._totalItems / this._limit) < 0.25) {
    this._limit = this._limit / 2;
    var oldStorage = this._storage;
    this._totalItems = 0;
    this._storage = LimitedArray(this._limit);
    for(var key in oldStorage){
      if(typeof oldStorage[key] !== 'function'){
        for(var i= 0; i< oldStorage[key].length; i++) {
          this.insert(...oldStorage[key][i]); //...[k, v]
        }
      }
    }
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


