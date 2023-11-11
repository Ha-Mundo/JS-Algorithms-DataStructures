////////////// Selection Sort: Implementation /////////////////

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestNumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumIndex]) lowestNumIndex = j;
    }

    if (lowestNumIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[lowestNumIndex];
      arr[lowestNumIndex] = temp;
    }
  }

  return arr;
}

////////////// ES6 syntax with swap function //////////////////////
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestNumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumIndex]) lowestNumIndex = j;
    }

    if (lowestNumIndex !== i)
      [arr[i], arr[lowestNumIndex]] = [arr[lowestNumIndex], arr[i]];
  }
  return arr;
}

selectionSort([0, 8, 15, 20, 35, 5, 3, 4, 1, 2]); // [ 0, 1, 2, 3, 4, 5, 8, 15, 20, 35 ]
