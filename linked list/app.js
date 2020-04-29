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




// Challenge 5

// my implementation of linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;

  }

  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this.size += 1;
    return this;

  }
  pop() {
    if (!this.head) return null;
    // 
    let first = this.head;
    let second = first.next
    while (second.next) {
      first = second;
      second = second.next;
    }
    this.tail = first;
    first.next = null;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return second.val;
  }
  shift() {
    if (!this.head) return undefined;
    let removed = this.head;
    this.head = this.head.next;
    this.size--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removed.val;
  }
  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let oldHead = this.head;
      this.head = new Node(val);
      this.head.next = oldHead;
    }
    this.size++;
    return this;
  }

  get(index) {
    if (this.size === 0) return undefined;
    if (index > this.size) return undefined;
    let counter = 0;
    let node = this.head;
    while (index !== counter) {
      node = node.next;
      counter++;
    }
    return node;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (this.size === 0) return undefined;
    if (index > this.size) return undefined;
    if (index === this.size) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = new Node(val);
    prev.next.next = temp;
    this.size++;
    return true;

  }

  remove(index) {
    if (this.size === 0) return undefined;
    if (index > this.size) return undefined;
    if (index === this.size) return !!this.pop();
    if (index === 0) return !!this.shift();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = prev.next.next;
    return removed;
  }

}

var list = new LinkedList()
list.push(1) // added node  to the end of list with val 1
list.push(21)
list.push(250)
list.push(350)
list.push(999)
list.pop() // removed last node with val 999
list.shift() // removed first node with val 1
list.unshift(20) // added 1st node with val 20
list.get(1) // got node with index 1 with val 21
list.insert(0, 10000) // added node to position 0 with val 10000
list.remove(1) // removed node with index 1 with val 20

// console.log(list)



// Challenge 6

// Task
// If you are attempting this Kata in NASM, the code examples shown below may not be relevant at all - please refer to the Sample Tests(written in C) for the exact requirements.

// Create a function stringify which accepts an argument list / $list and returns a string representation of the list.The string representation of the list starts with the value of the current Node, specified by its data / $data / Data property, followed by a whitespace character, an arrow and another whitespace character(" -> "), followed by the rest of the list.The end of the string representation of a list must always end with null / NULL / None / nil / nullptr / null()(all caps or all lowercase depending on the language you are undertaking this Kata in).For example, given the following list:

// new Node(1, new Node(2, new Node(3)))
// ...its string representation would be:

// "1 -> 2 -> 3 -> null"
// And given the following linked list:

// new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
// ...its string representation would be:

// "0 -> 1 -> 4 -> 9 -> 16 -> null"
// Note that null / NULL / None / nil / nullptr / null() itself is also considered a valid linked list.In that case, its string representation would simply be "null" / "NULL" / "None" / "nil" / "nullptr" /@"NULL"/"null()" (again, depending on the language).

// For the simplicity of this Kata, you may assume that any Node in this Kata may only contain non - negative integer values.For example, you will not encounter a Node whose data / $data / Data property is "Hello World".

//   Enjoy, and don't forget to check out my other Kata Series :D

function stringify(list) {
  let st = [];

  while (list) {
    st.push(list.data);
    list = list.next;
  }
  st.push('null');
  return st.join(" -> ");

}

// Challenge 7

// Linked Lists - Append

// Write an Append() function which appends one linked list to another.The head of the resulting list should be returned.

// var listA = 1 -> 2 -> 3 -> null
// var listB = 4 -> 5 -> 6 -> null
// append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// If both listA and listB are null / NULL / None / nil, return null / NULL / None / nil.If one list is null / NULL / None / nil and the other is not, simply return the non - null / NULL / None / nil list.

function Node(data) {

  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  // console.log(listA, listB)
  if (!listA && !listB) return null;
  if (!listA) return listB;
  if (!listB) return listA;
  let temp = listA
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = listB;
  return listA;
}



// Challenge 8

// Linked Lists - Sorted Insert

// Write a SortedInsert() function which inserts a node into the correct location of a pre - sorted linked list which is sorted in ascending order.SortedInsert takes the head of a linked list and data used to create a node as arguments.SortedInsert() should also return the head of the list.

//   sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
// sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
// sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)


function Node(data, nxt) {
  this.data = data;
  this.next = nxt;
}
function sortedInsert(head, data) {
  if (!head || data < head.data) return new Node(data, head);
  else {
    head.next = sortedInsert(head.next, data);
    return head;
  }
}

// or

function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  var node = new Node(data);
  var next = head;
  if (!head) {
    head = node;
  } else if (head.data > node.data) {
    node.next = head;
    head = node;
  } else {
    while (next.next && next.next.data < node.data) {
      next = next.next
    };
    node.next = next.next;
    next.next = node;
  }
  return head;
}

// or

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function sortedInsert(head, data) {
  if (head == null)
    return new Node(data);
  else if (head.data > data)
    return new Node(data, head);
  else
    return new Node(head.data, sortedInsert(head.next, data));
}


// implementation DoublyLinkedList
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }


  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      var newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.head) return undefined;
      var poppedNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
    }
    shift() {
      if (this.length === 0) return undefined;
      var oldHead = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
      }
      this.length--;
      return oldHead;
    }
    unshift(val) {
      var newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
    get(index) {
      if (index < 0 || index >= this.length) return null;
      var count, current;
      if (index <= this.length / 2) {
        count = 0;
        current = this.head;
        while (count !== index) {
          current = current.next;
          count++;
        }
      } else {
        count = this.length - 1;
        current = this.tail;
        while (count !== index) {
          current = current.prev;
          count--;
        }
      }
      return current;
    }
    set(index, val) {
      var foundNode = this.get(index);
      if (foundNode != null) {
        foundNode.val = val;
        return true;
      }
      return false;
    }
    insert(index, val) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(val);
      if (index === this.length) return !!this.push(val);

      var newNode = new Node(val);
      var beforeNode = this.get(index - 1);
      var afterNode = beforeNode.next;

      beforeNode.next = newNode, newNode.prev = beforeNode;
      newNode.next = afterNode, afterNode.prev = newNode;
      this.length++;
      return true;
    }
  }

  var list = new DoublyLinkedList()
  list.push("Harry")
  list.push("Ron")
  list.push("Hermione")
  

//  Doubly Linked List my implementation

class Node {
  constructor(val) {
    this.val = val
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.val = val
    this.next = null;
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }


  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {

      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = new Node(val);
    } else {
      let newNode = new Node(val);
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;

    }
    this.length++;
    return this;


  }

  set(index, val) {
    if (index >= this.length || index < 0) return false;

    let runer = this.head;
    let count = 0;
    while (this.head) {
      if (count === index) {
        runer.val = val;
        return true;
      } else {
        count++;
        runer = runer.next;
      }
    }
    return false;

  }
}







  


