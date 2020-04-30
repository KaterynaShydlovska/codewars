'use strict';

// Challenge 1

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              => true
// ")(()))"          => false
// "("               => false
// "(())((()())())"  => true

function validParentheses(parens) {
  let left = '(';
  let right = ')';
  let stack = [];
  console.log(parens)
  if (parens === '' || parens[0] === right || parens.length % 2 === 1) {
    return false
  }
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === left) {
      stack.push(parens[i])
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

//  implementing stack in syngl linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}


