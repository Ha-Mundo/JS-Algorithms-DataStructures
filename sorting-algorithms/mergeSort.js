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
        if(rightArr[rightIndex] > leftArr[leftIndex]){
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
