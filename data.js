'use strict';
/*
Fill in your own code where you see "your code here".
You can insert new lines at those locations, but you
will not need to edit the lines above and below them.
*/

//-----------------------------------------
// Stacks

function Stack () {
  this.stackArray = [];
}

Stack.prototype.add = function (item) {
  this.stackArray.push(item);
  return this; // for chaining, do not edit
};

Stack.prototype.remove = function () {
  return this.stackArray.pop()
};

//-----------------------------------------
// Queues

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

function Queue () {
  this.queueArray = [];
}

Queue.prototype.add = function (item) {
  this.queueArray.push(item);
  return this; // for chaining, do not edit
};

Queue.prototype.remove = function () {
  return this.queueArray.shift();
};

//-----------------------------------------
// Linked lists

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

function LinkedList () {
  this.head = this.tail = null;
}

function ListNode (item, prev, next) {
  this.item = item;
  this.next = next || null;
  this.prev = prev || null;
}

LinkedList.prototype.addToTail = function (item) {
  // your code here
  return this; // for chaining, do not edit
};

LinkedList.prototype.removeFromTail = function () {
  // your code here
};

LinkedList.prototype.forEach = function (iterator) {
  // your code here
};

//-----------------------------------------
// Association lists

function Alist () {
  this.head = null;
}

function AlistNode (key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next;
}

Alist.prototype.set = function (key, value) {
  const next = this.head ? this.head : null; 
  this.head = new AlistNode(key, value, next);
  return this; // for chaining; do not edit
};

Alist.prototype.get = function (key) {
  var step = this.head;
  while( step !== null && step.key !== key ){
    step = step.next;
  }
  return step === null ? undefined : step.value;
};


//-----------------------------------------
// Hash tables

function hash (key) {
  var hashedKey = 0;
  for (var i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

function HashTable () {
  this.buckets = [];
  for (var i=0; i < 20; i++) {
      this.buckets.push(new Alist())
  }  
}

HashTable.prototype.set = function (key, value) {
  this.buckets[hash(key)].set(key, value);
  return this; // for chaining, do not edit
};

HashTable.prototype.get = function (key) {   return this.buckets[hash(key)].get(key);
};

//-----------------------------------------
// Binary search trees

function BinarySearchTree (val) {
  this.value = val;
  this.left = this.right = null;
}

BinarySearchTree.prototype.insert = function (val) {
  if (val < this.value) {
    if (this.left === null){
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === null){
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }    
  }
  return this; // for chaining, do not edit
};

BinarySearchTree.prototype.min = function () {
  console.log('this = ', this)
  if (this.left === null) {
    console.log('***this.value = ', this.value)
    return this.value;
  }
  console.log('this.left.value = ', this.left.value)
  this.left.min();
};

BinarySearchTree.prototype.max = function () {
  if (this.right === null) {
    return this.value;
  }
  this.right.max();
};

BinarySearchTree.prototype.contains = function (val) {
  // your code here
};

BinarySearchTree.prototype.traverse = function (iterator) {
  // your code here
};
