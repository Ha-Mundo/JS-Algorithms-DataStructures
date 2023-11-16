////////  Merging Sort: Implementation /////////////

/*
Merging Arrays Pseudocode:
- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
- If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
- If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
- Once we exhaust one array, push in all remaining values from the other array 
*/

// Merges two already sorted arrays without modify passed parameters
function merge(leftArr, rightArr){
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            resultArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(rightArr[rightIndex])
            rightIndex++;
        }
    }
    while(leftIndex < leftArr.length) {
        resultArr.push(leftArr[leftIndex])
        leftIndex++;
    }
    while(rightIndex < rightArr.length) {
        resultArr.push(rightArr[rightIndex])
        rightIndex++;
    }
    return resultArr;
}

merge([100,200], [1, 2, 3, 5, 6]); // [1, 2, 3, 5, 6, 100, 200]

/* 
mergeSort Pseudocode:
- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
-Once the array has been merged back together, return the merged (and sorted!) array
*/

// Time Complexity O(n * log(n))
function mergeSort(arr) {
    if(arr.length <= 1) return arr
    
    let center = Math.floor(arr.length / 2)
    let left = arr.slice(0, center)
    let right = arr.slice(center)
    
    return merge(mergeSort(left), mergeSort(right));
    }

mergeSort([10, 24, 76, 73]); //[10, 24, 73, 76]
                
