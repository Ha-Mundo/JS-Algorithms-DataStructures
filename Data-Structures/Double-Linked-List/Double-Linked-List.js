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
}
