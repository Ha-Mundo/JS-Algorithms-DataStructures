//////////////  Quick Sort Implementation  ///////////////

function quickSort(arr) {
    const pivot = arr[arr.length - 1]
    const leftArr = []
    const rightArr = []

    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            leftArr.push(arr[i])
        } else{
            rightArr.push(arr[i])
        }
    }
}