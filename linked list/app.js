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



// Challenge 3

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.



//   Example 1:

// Input: [1, 2, 3, 4, 5]
// Output: Node 3 from this list(Serialization: [3, 4, 5])
// The returned node has value 3.(The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
//   ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
//     Example 2:

//   Input: [1, 2, 3, 4, 5, 6]
// Output: Node 4 from this list(Serialization: [4, 5, 6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var middleNode = function (head) {
  let count = 0;
  let headCount = head;
  while (headCount) {
    count += 1;
    headCount = headCount.next;
  }
  let middle = Math.floor(count / 2);
  let a = 0
  while (a < middle) {
    a++;
    head = head.next;
  }
  return head;

};



// Challenge 4 

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)







