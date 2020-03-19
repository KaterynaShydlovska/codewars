'use strict';

// Challenge 1

// LinkedList

class Node {
  constructor(potato) {
    this.potato = potato;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      this.head = new Node(value);
      this.head.next = temp;
    }
    this.size++;
    return value;
  }
  remove(value) {
    let currentHead = this.head;
    if (currentHead.potato === value) {
      this.head = currentHead.next;
      this.size--;
    } else {
      let prev = currentHead;
      while (currentHead.next) {
        if (currentHead.potato === value) {
          prev.next = currentHead.next;
          prev = currentHead;
          currentHead = currentHead.next;
          break; // break out of the loop
        }
        prev = currentHead;
        currentHead = currentHead.next;
      }
      if (currentHead.potato == value) {
        prev.next = null;
      }
      this.size--;
      return value;
    }
  }
}


let newList = new LinkedList();

console.log(newList.insert(5));
console.log(newList.insert(2));
console.log(newList.insert(3));
console.log(newList.insert("katya"));
// console.log(newList)
console.log('remove', newList.remove(5));
console.log(newList)


// Challenge 2

// remove  dublicates from the linked list

function remove(value, node) {
  let first = null;
  let second = node;
  while (second !== null) {
    if (second.value === value) {
      first.next = second.next;
      second = second.next;
    } else {
      first = second;
      second = second.next;
    }
  }
  return;
}


// Challenge 3

// Double linkedList
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleList {
  constructor(value) {
    this.head = null;
    ths.tail = null;
    this.size = 0;
  }
}

addHead(value){
  if (this.head === null) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    let temp = new Node(value);
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
  this.size++;
}


addTail(value){
  if (this.tail === null) {
    this.tail = new Node(value);
    this.head = this.tail;
  } else {
    let temp = new Node(value);
    this.tail.next = temp;
    temp.prev = this.tail;
    this.tail = temp;
  }
  this.size++;
}