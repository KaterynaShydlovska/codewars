class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
     let node = new Node(val);
     if(this.head === null){
         this.head = node;
         this.tail = this.head;
     }else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this.length +=1;
    return this;
     
    }
}