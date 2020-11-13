'use strict';

// Challenge 1

// Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }
  // helper function to find rigth place to append
  searchTree(node, value) {
    if (node.value > value) {
      // levo
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.searchTree(node.left, value);
      }
    } else {
      // idi vpravo
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.searchTree(node.right, value);
      }
    }
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.searchTree(this.root, value);
    }
    this.count++;
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;

  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;

  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // depth first search - branch by branch

  // in - order
  // left, root, right
  // 2,3,12,15,28,36,39
  dfsInOrder() {
    let result = [];

    const treverse = node => {
      // if left node exists, go left again
      if (node.left) treverse(node.left)
      // capture root node value
      result.push(node.value)
      // if right node exists, go right again
      if (node.right) treverse(node.right)
    }
    treverse(this.root);
    return result;

  }

  // pre - order
  // root,left, right
  // 15, 3,2,12,36,28,39
  dfsPreOrder() {
    let result = [];

    const treverse = node => {
      // capture root node value
      result.push(node.value)
      // if left node exists, go left again
      if (node.left) treverse(node.left)
      // if right node exists, go right again
      if (node.right) treverse(node.right)
    }
    treverse(this.root);
    return result;

  }

  // post-order
  // left, right, root
  // 2,12,3,28,39,36,15
  dfsPostOrder() {
    let result = [];

    const treverse = node => {
      // if left node exists, go left again
      if (node.left) treverse(node.left)
      // if right node exists, go right again
      if (node.right) treverse(node.right)
      // capture root node value
      result.push(node.value)
    }
    treverse(this.root);
    return result;

  }

  // breadth first search - level by level
  // use queue
  // 15,3,36,2,12,28,39
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root)

    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode);

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return result;

  }

}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst);

bst.size();
console.log(bst.min());
console.log(bst.max());

bst.contains(2)
bst.contains(9)

// DFS!!!
// bst.dfsInOrder();

// bst.dfsPreOrder();

// bst.dfsPostOrder();




// Challenge 2

//  BST

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.size = 0;
    this.root = null;
    this.max = null;
    this.min = null;
  }


  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.searchAnInsert(this.root, value);

      if (value > this.max) {
        this.max = value;
      } else if (this.min === null || value < this.min) {
        this.min = value;
      }
    }
    this.size++;
  }

  searchAnInsert(node, value) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.searchAnInsert(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.searchAnInsert(node.right, value);
      }
    }
  }

  min() {
    console.log('here is', this.min)
    return this.min;
  }


  max() {
    return this.max;
  }
}


let bst = new BST();

bst.insert(5);
bst.insert(6);
bst.insert(10);
bst.insert(8);
bst.insert(1);
bst.insert(34);
bst.insert(0);
bst.insert(-1);

console.log(bst)

// Challenge 3

class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }
  find(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
  }
  contains(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              return true;
          }
      }
      return false;
  }
  BFS(){
    var node = this.root,
        data = [],
        queue = [];
    queue.push(node);

    while(queue.length){
       node = queue.shift();
       data.push(node.value);
       if(node.left) queue.push(node.left);
       if(node.right) queue.push(node.right);
    }
    return data;
}
DFSPreOrder(){
    var data = [];
    function traverse(node){
        data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}
DFSPostOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(this.root);
    return data;
}
DFSInOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();



  
// Challenge 4

// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23


var rangeSumBST = function(root, low, high) {
  let sum =0;
  
  return bst(root, low, high )
};

function bst(node, low, hight, sum=0){
  
  if(!node){
    return 0;    
  }
  
  if(node.val >= low && node.val <= hight){
      sum = node.val;
  }
  return sum + bst(node.left, low, hight) + bst(node.right, low, hight)

}