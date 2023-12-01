// Piece of data -> val
// Reference to next node -> next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
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
}

let list = new SinglyLinkedList();
list.push('How');
list.push('are');
list.push('you?');
console.log(list);
list.pop()
console.log(list);
list.pop()
console.log(list);
list.pop()
console.log(list);
console.log(list.pop());

