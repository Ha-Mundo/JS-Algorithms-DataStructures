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
}