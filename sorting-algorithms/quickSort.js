//////////////  Quick Sort Implementation  ///////////////

/* 
Pivot Pseudocode:
- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
- Grab the pivotIndex from the start of the array 
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
    - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index
*/

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {

    let pivotIndex = startIndex

    for(let i = startIndex + 1; i <= endIndex; i++) {
    
        if(arr[startIndex] > arr[i]) {
            
            pivotIndex++
    
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
            
        }
    }
    
    if(pivotIndex !== startIndex) [arr[pivotIndex], arr[startIndex]] = [arr[startIndex], arr[pivotIndex]]

    return pivotIndex
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]) // 3