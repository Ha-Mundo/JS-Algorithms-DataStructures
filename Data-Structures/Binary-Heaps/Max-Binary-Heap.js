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
}

let array = [41, 39, 33, 18, 27, 12]

let heap = new MaxBinaryHeap(array)
heap.insert(55)
console.log(heap.values);