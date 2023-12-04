// Piece of data -> val
// Reference to next node -> next

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
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
        const newNode = new Node(val);

        if((!this.head )) {
            this.head = newNode;
            this.tail = this.head;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }

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

}

let list = new SinglyLinkedList();
list.push('How');
list.push('are');
list.push('you?');
list.push(':)');
console.log(list.get(3));


