/////////   Bubble Sort: Implementation //////////

function bubbleSort(arr) {
  let swaps;

  for (let i = arr.length - 1; i > 0; i--) {
    swaps = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        console.log(temp);
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swaps = true;
      }
    }

    if (!swaps) break;
  }
  return arr;
}

bubbleSort([8, 61, 62, 36, 45, 5, 6, 7]); // [ 5, 6, 7, 8, 36, 45, 61, 62 ]
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]); // [1, 2, 3, 4, 5, 6, 7, 8]
