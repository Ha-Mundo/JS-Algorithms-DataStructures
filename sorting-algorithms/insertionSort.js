///////////////////// Insertion Sort Implementation /////////////////////

// Time Complexity O(n^2)

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {

    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      else break;
    }
    
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4])); // [1, 2, 4, 9, 76]
                       // [1, 2, 9, 76, 4]
                       // [1, 2, 9, 76, 4]
                       // [1, 2, 9, 76, 4]
                       // [1, 2, 9, 4, 76]
                       // [1, 2, 4, 9, 76]
