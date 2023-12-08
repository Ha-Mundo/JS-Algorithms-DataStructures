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

}

let list = new DoublyLinkedList()
list.push(1).push(2).push(3)
console.log(list);
