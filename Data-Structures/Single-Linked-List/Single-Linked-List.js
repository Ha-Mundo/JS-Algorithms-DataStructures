/////////////////////// Single Linked List //////////////////////////

/* 
- Data structure that contains a head, tail and length property
- Consists of nodes, and each node has a value and a point to another node or null
- Do not have indices, connected via nodes with a next pointer
- Random access is not allowed

Insertion: O(1)
Removal: O(1) or O(n)
Searching: O(n)
Access: O(n)
*/



class Node {
    constructor(val, next = null) {
        this.val = val; // Piece of data -> val
        this.next = next; // Reference to next node -> next
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);

        if(!this.head) this.head = newNode;
        else this.tail.next = newNode;

        this.tail = newNode;
        this.length++;

        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newtTail = current; 

        while(current.next) {
            newtTail = current;
            current = current.next;
        }

        this.tail = newtTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0) this.tail = null;

        return currentHead;
    }

    unshift(val) {
        this.head = new Node(val, this.head);
    
        if (!this.length) this.tail = this.head;
        this.length++;
    
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let current = this.head;
        let counter  = 0;

        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
   
        if(foundNode) {
           foundNode.val = val;
           return true;
        } 
       return false;
       }

       insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
    
        const prevNode = this.get(index - 1);
        
        if (!prevNode) return false;
    
        prevNode.next = new Node(val, prevNode.next);
        this.length++;
    
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
    
        const prevNode = this.get(index - 1);
    
        if (!prevNode) return undefined;
    
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        removedNode.next = null;
        this.length--;
    
        return removedNode;
      }

      reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null
        let next;

          for (let i = 0; i < this.length; i++) {
          next = current.next; 
          current.next = prev; 
          prev = current;
          current = next; 
        }

        return this;
      }

      iterate(cb = null) {
        let arr = [];
        let currentNode = this.head;
    
        while (currentNode) {
          if (typeof cb === 'function') arr.push(cb(currentNode.val));
          else arr.push(currentNode.val); 
          currentNode = currentNode.next;
        }
    
        return arr;
      }

      print() {
        console.log(this.iterate());
      }

}

let list = new SinglyLinkedList();

list.push(1).push(2).push(30).push(4).push(5);
list.print(); // [ 1, 2, 30, 4, 5 ]
list.pop();
list.print(); // [ 1, 2, 30, 4 ]
list.unshift(0);
list.print(); // [ 0, 1, 2, 30, 4 ]
list.shift();
list.print(); // [ 1, 2, 30, 4 ]
console.log(list.get(2).val); // 30
list.set(2, 3);
console.log(list.get(2).val); // 3
list.insert(3, 10000);
list.print(); // [ 1, 2, 3, 10000, 4, ]
list.remove(3);
list.print(); // [ 1, 2, 3, 4 ]
list.reverse();
list.print(); // [ 4, 3, 2, 1 ]




