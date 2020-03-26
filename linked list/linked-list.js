
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

// Write tests to prove the following functionality:

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list
// Ensure your tests are passing before you submit your solution.

// Stretch Goal
// Create a new branch called doubly - linked - list, and, using the resources available to you online, implement a doubly linked list(completely separate from your singly linked list).


class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
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
}



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