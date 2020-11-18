class Queue{
    constructor(){
      this.items =[];
    }
  
  
    enqueue(item){
      this.items.push(item)
    }
  
  
    dequeue(){
      if(this.items.length === 0){
        return 'Empty queue';
      }else{
        this.items.shift()
      }
    }
  
  
    front(){
      if(this.items.length === 0){
        return 'Empty queue';
      }else{
        return this.items[0];
      }
    }
  
    isEmpty(){
      if(this.items.length === 0){
        return true;
      }else{
        return false;
      }
    }
  
    printQueue(){
      let print ='';
      if(this.items.length === 0){
        'Empty Queue';
      }else{
       for(let i=0; i< this.items.length; i++){
         print= print + this.items[i] + ' '
       }
      }
      return print;
    }
  }
  
  
  let q= new Queue();
  
  console.log(q)
  q.enqueue('two')
  q.enqueue('three')
  q.enqueue('five')
  q.dequeue()
  console.log(q.printQueue())
  
  
  class Stack{
    constructor(){
      this.stack =[];
    }
  
  
    add(item){
      this.stack.push(item)
    }
  
    delete(){
      if(this.isEmpty()){
       return 'Empty stack'
      }else{
        this.stack.pop();
      }
      
    }
    
    last(){
      if(this.isEmpty()){
         return 'Empty stack'
      }else{
        return this.stack[this.stack.length-1]
      }
      
    }
  
    isEmpty(){
      if(this.stack.length === 0){
        true;
      }else{
        false;
      }
  
    }
  
  
    printStack(){
      let str ='';
      for(let i =0; i< this.stack.length; i++){
        str = str + this.stack[i] + ' '
      }
      return str;
    }
  
  }
  
  
  let stack = new Stack();
  
  
  stack.add('one')
  stack.add('two')
  stack.add('three')
  stack.add('four')
  
  stack.printStack()
  
  stack.delete()
  stack.printStack()

/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 * For example, the following two linked lists:
 * Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
 * Output: Reference of the node with value = 8
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let obj = {};
    
    if(!headA || !headB){
        return null;
    }
    
    let curA = headA;
    
    while(curA){
        if(obj[curA.val]) {
            obj[curA.val].push(curA)
        } else {
            obj[curA.val]= [curA];
        }
        curA = curA.next;
    }
    
    console.log(Object.keys(obj));
    
    let curB =headB;
    while(curB){
        if(obj[curB.val]){
            if(obj[curB.val].includes(curB)) {
                return curB;
            }
        }
        curB= curB.next;
    }
    return null;
    
};

  var getIntersectionNode = function(headA, headB) {
    let m = new Map();
    while (headA !== null) {
        m.set(headA, 1);
        headA = headA.next;
    }       
    while (headB !== null) {
        if (m.has(headB)) return headB;
        headB = headB.next;
    }
    return null; // there is no intersection
    // Time Complexity: O(m+n), m = length of list A, n = length of list B
    // Space Complexity: O(max(m,n))
};

// 


function tringle(x1, y1, x2, y2, x3, y3, x4, y4){

  let bigArea = helper(x1, y1, x2, y2, x3, y3)

  let smallOne = helper(x4, y4, x3, y3, x2, y2)

  let smallTwo=helper(x4, y4, x2, y2, x1, y1)

  let smallThree= helper(x4, y4, x1, y1, x3, y3)

  if(smallOne + smallTwo + smallThree === bigArea){
    return 'Inside';
  }else{
    return 'Not inside';
  }
}


function helper(x1, y1, x2, y2, x3, y3){

  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0)
}

tringle(0, 0, 20, 0, 10, 30, 10, 15)


///// for reqtangle
// Area A = [ x1(y2 – y3) + x2(y3 – y1) + x3(y1-y2)]/2 + [ x1(y4 – y3) + x4(y3 – y1) + x3(y1-y4)]/2
// 2) Calculate area of the triangle PAB as A1.
// 3) Calculate area of the triangle PBC as A2.
// 4) Calculate area of the triangle PCD as A3.
// 5) Calculate area of the triangle PAD as A4.
// 6) If P lies inside the triangle, then A1 + A2 + A3 + A4 must be equal to A.


//////////////////////////////////////////////////
function findDepthLev(root){
 if(!root){
   return null;
 }
 let maxD =1;
 
 helper(root, maxD, 1)
 
 return maxD;
}
 
function helper(node, maxD, cur){
 
 if(cur> maxD){
   maxD=cur;
 }
 
 if(node.left){
   helper(node.left, maxD, cur+1)
 }
 if(node.right){
   helper(node.right, maxD, cur+1)
 }
}

////////////////////////////////////////
function findIslands(matrix){
 
 let islands=0;
 
 for(let i=0; i< matrix.length; i++){
   for(let j = 0; j<matrix[i]; j++){
     if(matrix[i][j]===1){
       islands++;
       helper(matrix, i, j)
     }
   }
 }
 return islands;
}
 
function helper(matrix, i, j){
 
 if(j === matrix[i].length || j<0 || i<0 || i === matrix.length){
   return;
 }else{
   helper(matrix, i, j+1);
   helper(matrix, i, j-1);
   helper(matrix, i+1, j);
   helper(matrix, i-1, j)
 }
 
}


