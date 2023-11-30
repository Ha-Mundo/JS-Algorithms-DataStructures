// Piece of data -> val
// Reference to next node -> next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val)

        if(!this.head) this.head = newNode
        else this.tail.next = newNode

        this.tail = newNode 
        this.length++

        return this
        
    }
}

let list = new SinglyLinkedList()
list.push('How')
list.push('are')
list.push('you?')
console.log(list);

