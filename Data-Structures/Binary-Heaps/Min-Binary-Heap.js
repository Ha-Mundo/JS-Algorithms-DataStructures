class MinBinaryHeap {
    constructor(array = []) {
        this.values = array;
    }

    insert(value) {
        this.values.push(value);
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
        
        if(element >= parentElement) break;
        
        this.values[parentIndex] = element;
        this.values[index] = parentElement;
        index = parentIndex;
        }
    }

    extractMin() {
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
                if( leftChild < element ) {
                    swap = leftChildIndex;
                }
            }
            
            if(rightChildIndex < length) {
               rightChild = this.getItem(rightChildIndex);
               if((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if(!swap) break;
            this.values[index] = this.getItem(swap);
            this.values[swap] = element;
            index = swap;

        }
    }
}

let array = [12, 18, 23, 29, 51, 44]

let heap = new MinBinaryHeap(array)

heap.insert(11)
console.log(heap.values); // [ 11, 18, 12, 29, 51, 44, 23 ]
console.log(heap.extractMin()); // 11
console.log(heap.values); // [ 12, 18, 23, 29, 51, 44 ]
console.log(heap.extractMin()); // 12
console.log(heap.values); // [ 18, 29, 23, 44, 51 ]
console.log(heap.extractMin()); // 18
console.log(heap.values); // [ 23, 29, 51, 44 ]
console.log(heap.extractMin()); // 23
console.log(heap.values); // [ 29, 44, 51 ]
console.log(heap.extractMin()); // 29
console.log(heap.values); // [ 44, 51 ]
console.log(heap.extractMin()); // 44
console.log(heap.values); // [ 51 ]
console.log(heap.extractMin()); // 51
console.log(heap.extractMin()); // null
console.log(heap.values); // []