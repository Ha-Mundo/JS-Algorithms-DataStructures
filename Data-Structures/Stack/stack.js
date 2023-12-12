class Node {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  };

  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    push(val) {
        this.first = new Node(val, this.first);
    
        if (!this.size) this.last = this.first;
        this.size++;
    
        return this.size;
      }

    pop() {
    if (!this.first) return null;

    const removedNode = this.first;
    this.first = removedNode.next;
    this.size--;

    if (!this.size) this.last = null;

    return removedNode.data;
      }
    
}