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

        if(this.values.length) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }
}

let array = [41, 39, 33, 18, 27, 12]

let heap = new MaxBinaryHeap(array)
heap.insert(55)
console.log(heap.values);