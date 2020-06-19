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

// pop()

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
    pop(){
        if(!this.head) return undefined;
        let removed = this.tail;
        let runner = this.head;
        while(runner.next !== this.tail){
            runner = runner.next;
        }
        this.tail = runner;
        this.tail.next = null;
        this.length -=1;
        return removed;
    }
    
}
