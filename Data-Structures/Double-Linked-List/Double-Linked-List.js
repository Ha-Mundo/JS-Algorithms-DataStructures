class Node {
    constructor(val, next = null, prev = null) {
      this.val = val;
      this.next = next;
      this.prev = prev;
    }
  };

  class DoublyLinkedList {
    constructor () {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val) {
        let newNode = new Node(val, null, this.tail);
        if(this.length === 0){
            this.head = newNode;
        } else {
            this.tail.next = newNode; 
        }

        this.tail = newNode;
        this.length++;
        return this;
    }

    pop() {
      if(!this.head) return undefined;
      let currentTail = this.tail;
      
      if(this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = currentTail.prev;
          this.tail.next = null;
          currentTail.prev = null; 
      }
      this.length--;
      return currentTail;
  }

  shift() {
    if(this.length === 0) return undefined;
    let currentHead = this.head;

    if(this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = currentHead.next;
        this.head.prev = null;
        currentHead.next = null;
    }
    this.length--;
    return currentHead;
}

unshift(val) {
  let newNode = new Node(val, this.head);
  console.log(newNode);
  
  if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
  } else {
      this.head.prev = newNode;
      this.head = newNode;
  }
  this.length++;

  return this;
}

}

let list = new DoublyLinkedList();
list.unshift(3).unshift(2).unshift(1);
console.log(list);
