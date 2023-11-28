//////////////  Quick Sort Implementation  ///////////////

function quickSort(arr) {
    if ( arr.length === 1) return arr // Base case 

    const pivot = arr[arr.length - 1]
    const leftArr = []
    const rightArr = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    } else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot]
    } else {
        return [pivot, ...quickSort(rightArr)]
    }
}

quickSort([-2, 5, -6, 1, 3]); //[-6, -2, 1, 3, 5]