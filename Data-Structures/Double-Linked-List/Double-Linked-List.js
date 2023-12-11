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

get(index) {
    if(index < 0 || index > this.length - 1 || index === undefined) return null;
    
    let middle = Math.floor(this.length / 2);
    let currentNode;
    
    if(index <= middle) {
        currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
    } else {
        currentNode = this.tail;
        for(let i = this.length - 1; i > index; i--) {
            currentNode = currentNode.prev;
        }
    }

    return currentNode;
    }

    set(index, val) {
        let node = this.get(index);
        
        if(!node || val === undefined) return false;
        node.val = val;

        return true;
        }

        insert(index, val) {
            if(index < 0 || index > this.length || val === undefined) return false;
            if(index === 0) return !!this.unshift(val);
            if(index === this.length) return !!this.push(val);

            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next;

            let newNode = new Node(val, nextNode, prevNode);

            prevNode.next = newNode;
            nextNode.prev = newNode;
            this.length++;

            return true;

        }

        remove(index) {
            if(index < 0 || index >= this.length || index === undefined) return undefined;
            if(index === 0) return this.shift();
            if(index === this.length - 1) return this.pop();
    
            let removedNode = this.get(index);
            let prevNode = removedNode.prev;
            let nextNode = removedNode.next;
    
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            removedNode.next = null;
            removedNode.prev = null;
            this.length--;
    
            return removedNode;
        }

}

let list = new DoublyLinkedList()
list.push('a').push('b').push('c').push('d').push('e')
console.log(list.insert(3,'z')); // true
console.log(list);
