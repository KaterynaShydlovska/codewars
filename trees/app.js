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
