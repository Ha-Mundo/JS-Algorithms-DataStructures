class Node {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  };

class Queue {
    constructor () {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
    
        if (!this.first) this.first = newNode;
        else this.last.next = newNode;
    
        this.last = newNode;
        this.size++;
    
        return this.size;
      }

    dequeue() {
        if (!this.first) return null;

        const removedNode = this.first;
        this.first = removedNode.next;
        this.size--;

        if (!this.size) this.last = null;

        return removedNode.val;
    }
    
}