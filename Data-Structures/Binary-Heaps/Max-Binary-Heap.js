////////////////// Max Binary Heap //////////////////

class MaxBinaryHeap {
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
        
        if(element <= parentElement) break;
        
        this.values[parentIndex] = element;
        this.values[index] = parentElement;
        index = parentIndex;
        }
    }

    extractMax() {
        if (!this.values.length) return null;
        if(this.values.length === 1) return this.values.pop();
 
        const max = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown(idx = 0, length = this.values.length) {
        let index = idx;
        let element = this.getItem(index);
       
        while(true){
            let leftChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIndex < length){
                leftChild = this.getItem(leftChildIndex);
                if( leftChild > element ) {
                    swap = leftChildIndex;
                }
            }
            
            if(rightChildIndex < length) {
               rightChild = this.getItem(rightChildIndex);
               if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

let array = [41, 39, 33, 18, 27, 12]

let heap = new MaxBinaryHeap(array)
heap.insert(55)
console.log(heap.values); // [ 55, 39, 41, 18, 27, 12, 33 ]
console.log(heap.extractMax()); // 55
console.log(heap.values); // [ 41, 39, 33, 18, 27, 12 ]
console.log(heap.extractMax()); // 41
console.log(heap.values); // [ 39, 27, 33, 18, 12 ]
console.log(heap.extractMax()); // 39
console.log(heap.values); // [ 33, 27, 12, 18 ]
console.log(heap.extractMax()); // 33
console.log(heap.values); // [ 27, 18, 12 ]
console.log(heap.extractMax()); // 27
console.log(heap.values); // [ 18, 12 ]
console.log(heap.extractMax()); // 18
console.log(heap.values); // [ 12 ]
console.log(heap.extractMax()); // 12
console.log(heap.extractMax()); // null
console.log(heap.values);// []