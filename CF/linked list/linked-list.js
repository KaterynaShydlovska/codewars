
// Chalenge 1

// Features
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
// Within your LinkedList class, include a head property.Upon instantiation, an empty Linked List should be created.
// Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
// Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
// Define a method called toString(or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
// "{ a } -> { b } -> { c } -> NULL"
// Any exceptions or errors that come from your code should be semantic, capturable errors.For example, rather than a default error thrown by your language, your code should raise /throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
// Be sure to follow your language / frameworks standard naming conventions(e.g.C# uses PascalCasing for all method and class names).
// Structure and Testing
// Utilize the Single - responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge.You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.


// Stretch Goal
// Create a new branch called doubly - linked - list, and, using the resources available to you online, implement a doubly linked list(completely separate from your singly linked list).

 
class Node{
  constructor(value, node=null) {
    this.value = value;
    this.next = node;
  }
}

class LinkedList {
  constructor(node = null) {
    if (node) {
      this.head = new Node(node);
    } else {
      this.head = node;
    }

  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      this.head = new Node(value);
      this.head.next = temp;
    }
    return value;

  }

  includes(value) {
    let member = this.head;
    while (member !==null) {
      if (member.value === value) {
        return true;
      }
      member = member.next;
    }
    return false;
  }

  toString() {
    if (this.head === null) {
      throw new Error('Linked list is empty ;(');
    }
    let st = [];
    let node = this.head;
    while (node) {
      st.push("{ " + node.value + " }");
      node = node.next;
    }
    st.push('NULL');
    return st.join(' -> ');
  }
}


// let a = new Node('b');
let list = new LinkedList(10);
// console.log(list.toString())
list.insert(20);
console.log(list.toString())
list.includes(10)


// Chalenge 2

// Linked list insertions.

//   Specifications
// Read all of these instructions carefully.Name things exactly as described.
// Do all your work in a public repository called data - structures - and - algorithms, with a well - formatted, detailed top - level README.md.
// Create a new branch in your repo called ll - insertions.
// Your top - level readme should contain a “Table of Contents” navigation to all of your challenges and implementations so far. (Don’t forget to update it!)
// Place this implementation in your Data - Structures folder within your repository.
// On your branch, create…
// C#: Extend your LinkedList class according to the feature tasks below.
//   JavaScript: Extend your LinkedList class according to the feature tasks below
// Python: Extend your LinkedList class according to the feature tasks below
// Java: Extend your LinkedList class according to the feature tasks below
// Include any language - specific configuration files required for this challenge to become an individual component, module, library, etc.
//   NOTE: You can find an example of this configuration for your course in your class lecture repository.
// Feature Tasks
// Write the following methods for the Linked List class:

// .append(value) which adds a new node with the given value to the end of the list
//   .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
//     .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
// Examples
//   .append(value)
// Input	Args	Output
// head -> [1] -> [3] -> [2] -> X	5	head -> [1] -> [3] -> [2] -> [5] -> X
// head -> X	1	head -> [1] -> X
//   .insertBefore(value, newVal)
// Input	Args	Output
// head -> [1] -> [3] -> [2] -> X	3, 5	head -> [1] -> [5] -> [3] -> [2] -> X
// head -> [1] -> [3] -> [2] -> X	1, 5	head -> [5] -> [1] -> [3] -> [2] -> X
// head -> [1] -> [2] -> [2] -> X	2, 5	head -> [1] -> [5] -> [2] -> [2] -> X
// head -> [1] -> [3] -> [2] -> X	4, 5	Exception
//   .insertAfter(value, newVal)
// Input	Args	Output
// head -> [1] -> [3] -> [2] -> X	3, 5	head -> [1] -> [3] -> [5] -> [2] -> X
// head -> [1] -> [3] -> [2] -> X	2, 5	head -> [1] -> [3] -> [2] -> [5] -> X
// head -> [1] -> [2] -> [2] -> X	2, 5	head -> [1] -> [2] -> [5] -> [2] -> X
// head -> [1] -> [3] -> [2] -> X	4, 5	Exception


class Node {
  constructor(value, node = null) {
    this.value = value;
    this.next = node;
  }
}

class LinkedList {
  constructor(node = null) {
    if (node) {
      this.head = new Node(node);
    } else {
      this.head = node;
    }

  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      this.head = new Node(value);
      this.head.next = temp;
    }
    return value;

  }

  includes(value) {
    let member = this.head;
    while (member !== null) {
      if (member.value === value) {
        return true;
      }
      member = member.next;
    }
    return false;
  }

  toString() {
    if (this.head === null) {
      throw new Error('Linked list is empty ;(');
    }
    let st = [];
    let node = this.head;
    while (node) {
      st.push("{ " + node.value + " }");
      node = node.next;
    }
    st.push('NULL');
    return st.join(' -> ');
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let element = this.head;
      while (element.next) {
        element = element.next;
      }
      element.next = new Node(value);
    }
  }


  insertBefore(value, newVal) {
    if (this.head === null) {
      throw new Error('Here is nothing ;(');
    }
    console.log(this.head.value === value)
    if (this.head.value === value) {
      let temp = this.head;
      this.head = new Node(newVal, temp)
      return;
    }
    let element = this.head;
    while (element.next) {
      if (element.next.value === value) {
        element.next = new Node(newVal, element.next);
        return;
      }
      element = element.next;
    }
  }


  insertAfter(value, newVal) {
    if (this.head === null) {
      throw new Error('Here is nothing ;(');
    }
    let element = this.head;
    while (element) {
      if (element.value === value) {
        element.next = new Node(newVal, element.next);
        return;
      }
      element = element.next;
    }
    throw new Error('No valid value');

  }
}

// let a = new Node('b');
let list = new LinkedList(10);
// console.log(list.toString())
list.insert(20);
list.insert(2);
list.append(3);
list.insertBefore(10, 4)
list.insertAfter(2, 46)
list.insertBefore(2, 6)

console.log(list.toString())


// Chalenge 3

// Feature Tasks
// Write a method for the Linked List class which takes a number, k, as a parameter.Return the node’s value that is k from the end of the linked list.You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
//   Example
// ll.kthFromEnd(k)
// Input ll	Arg k	Output
// head -> [1] -> [3] -> [8] -> [2] -> X	0	2
// head -> [1] -> [3] -> [8] -> [2] -> X	2	3
// head -> [1] -> [3] -> [8] -> [2] -> X	6	Exception



class Node {
  constructor(value, node = null) {
    this.value = value;
    this.next = node;
  }
}

class LinkedList {
  constructor(node = null) {
    if (node) {
      this.head = new Node(node);
      this.size = 1;
    } else {
      this.head = node;
      this.size = 0;
    }


  }



  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      this.head = new Node(value);
      this.head.next = temp;
    }
    this.size += 1;
    return value;

  }

  includes(value) {
    let member = this.head;
    while (member !== null) {
      if (member.value === value) {
        return true;
      }
      member = member.next;
    }
    return false;
  }

  toString() {
    if (this.head === null) {
      throw new Error('Linked list is empty ;(');
    }
    let st = [];
    let node = this.head;
    while (node) {
      st.push("{ " + node.value + " }");
      node = node.next;
    }
    st.push('NULL');
    return st.join(' -> ');
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let element = this.head;
      while (element.next) {
        element = element.next;
      }
      element.next = new Node(value);
    }
    this.size += 1;
  }


  insertBefore(value, newVal) {
    if (this.head === null) {
      throw new Error('Here is nothing ;(');
    }
    // console.log(this.head.value === value)
    if (this.head.value === value) {
      let temp = this.head;
      this.head = new Node(newVal, temp)
      this.size += 1;
      return;
    }
    let element = this.head;
    while (element.next) {
      if (element.next.value === value) {
        element.next = new Node(newVal, element.next);
        this.size += 1;
        return;
      }
      element = element.next;
    }
  }


  insertAfter(value, newVal) {
    if (this.head === null) {
      throw new Error('Here is nothing ;(');
    }
    let element = this.head;
    while (element) {
      if (element.value === value) {
        element.next = new Node(newVal, element.next);
        this.size += 1;
        return;
      }
      element = element.next;
    }
    throw new Error('No valid value');

  }


  kthFromEnd(k) {
    if (k > this.size - 1) {
      throw new Error('Exception');
    } else {
      // console.log(this.size)
      let steps = (this.size - 1) - k;
      let element = this.head;

      while (steps) {
        element = element.next;
        steps--;
      }
      return element.value;
    }
  }
}




// let a = new Node('b');
let list = new LinkedList(10);
// console.log(list.toString())
list.insert(20);
list.insert(2);
list.append(3);
list.insertBefore(10, 4)
list.insertAfter(2, 46)
list.insertBefore(2, 6)

console.log(list.kthFromEnd(3));
console.log(list.kthFromEnd(16));
console.log(list.toString())



// Chalenge 4

// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5
var removeElements = function(head, val) {
    
        
  if (head === null) {
  return head;
}

// First, handle the head with the matched `val`.
while (head !== null && head.val === val) {
  head = head.next;
}

// And then, handle the remaining nodes' values.
if (head !== null) {
  let curr = head.next;
// A pointer that actually modifies the linked list.
  let prev = head;
  
  while (curr !== null) {
      if (curr.val === val) {
          prev.next = curr.next;
      } else {
          prev = curr;
      }
      
      curr = curr.next;
  } 
}

return head;
};



