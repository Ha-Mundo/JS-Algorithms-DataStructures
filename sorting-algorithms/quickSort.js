//////////////  Quick Sort Implementation  ///////////////

// Time Complexity - Average/Best Cases --> O(n log n) 
// Time Complexity - Worst Cases --> O(n^2) 
function quickSort(arr) {
    if ( arr.length <= 1) return arr // Base Case 

    const pivot = arr[arr.length - 1]
    const leftArr = []
    const rightArr = []
    // With the slice method we create swallow copy of the original array that keep our function pure without including last(Pivot) element of the original array
    for(const el of arr.slice(0, arr.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }

    
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    
}

quickSort([-2, 5, -6, 1, 3]); //[-6, -2, 1, 3, 5]