class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._storage = {};
    this._keyCounter = 0;
  }

  push(value){
    this._storage[this._keyCounter++] = value;
  }

  pop(){
    this._keyCounter && this._keyCounter--;
    var result = this._storage[this._keyCounter];
    delete this._storage[this._keyCounter];
    return result;
  }

  size(){
    return this._keyCounter;
  }
}

var newInstance = new Stack();