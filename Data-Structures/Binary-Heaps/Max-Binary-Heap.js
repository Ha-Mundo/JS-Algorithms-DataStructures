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
}