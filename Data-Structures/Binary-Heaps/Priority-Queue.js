////////////////////////// Priority Queue ////////////////////////

/* 
Implement Priority Queue with Min Binary Heap
Each Node has a value and a priority. 
Use the priority to build the heap. 
Higher priority is a lower number.

- Enqueue: This method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.

- Dequeue: This method removes root element, returns it, and rearranges heap using priority.
*/

class QueueNode {
    constructor(value, priority) {
      this.value = value;
      this.priority = priority;
    }
  };

class PriorityQueue {
    constructor(array = []) {
        this.values = array;
    }

    enqueue(value, priority) {
        let newNode = new QueueNode(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }

    getItem(index) {
        return this.values[index];
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    bubbleUp(idx = this.values.length - 1) {
    let index = idx; 
    const element = this.getItem(index);
    
    while(index > 0) {
        let parentIndex =  this.getParentIndex(index); 
        let parentElement = this.getItem(parentIndex);
        
        if(element.priority >= parentElement.priority) break;
        
        this.values[parentIndex] = element;
        this.values[index] = parentElement;
        index = parentIndex;
        }
    }

    dequeue() {
        if (!this.values.length) return null;
        if(this.values.length === 1) return this.values.pop();
 
        const min = this.values[0];
        const end = this.values.pop();

        if(this.values.length) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown(idx = 0, length = this.values.length) {
        let index = idx;
        const element = this.getItem(index);
       
        while(true){
            let leftChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIndex < length){
                leftChild = this.getItem(leftChildIndex);
                if( leftChild.priority < element.priority ) {
                    swap = leftChildIndex;
                }
            }
            
            if(rightChildIndex < length) {
               rightChild = this.getItem(rightChildIndex);
               if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if(!swap) break;
            this.values[index] = this.getItem(swap);
            this.values[swap] = element;
            index = swap;

        }
    }

    printQueue() {
        for (const item of this.values) {
          console.log(`${item.value} - ${item.priority}`);
        }
    }
}

let ER = new PriorityQueue();

ER.enqueue("common cold",5)
ER.enqueue("gunshot wound",1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
ER.printQueue(); // 'gunshot wound - 1' 'broken arm - 2' 'high fever - 4' 'common cold - 5' 'glass in foot - 3'
console.log(ER.dequeue()); // QueueNode { value: 'gunshot wound', priority: 1 }
ER.printQueue(); // 'broken arm - 2' 'glass in foot - 3' 'high fever - 4' 'common cold - 5'
console.log(ER.dequeue()); // QueueNode { value: 'broken arm', priority: 2 }