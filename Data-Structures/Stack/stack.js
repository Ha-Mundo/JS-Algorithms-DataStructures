/*//////////////////////// Stack ///////////////////////////////////
 
Abstract data structure of a collection of data that abides by LIFO (last In - First Out).

Push method takes in a node and puts it at the top of the stack should return the new size of the stack. Pop method removes the node at the top of the stack and returns the value of that node.

- Managing function invocations
- Undo/Redo
- Routing (history in a browser)

Insertion: O(1)
Removal: O(1)
Searching: O(n)
Access: O(n)
 */

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

       return removedNode.val;
      }
    
}

let stack = new Stack()

stack.push(10);
stack.push(100);
stack.push(1000);
console.log(stack);
console.log(stack.pop()); // 1000
console.log(stack.size); // 2
stack.pop();
stack.pop();
console.log(stack.size); // 0
console.log(stack.pop()); // null