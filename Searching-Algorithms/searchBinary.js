//////////// Search Coding Exercise 25: Binary Search Exercise ///////////////

// Write a function called binarySearch  which accepts a sorted  array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here -
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and
// here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Time Complexity - O(log n)

let numList = [1, 3, 4, 6, 8, 9, 11, 12];

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) return middle;

    if (arr[middle] < val) left = middle + 1;
    else right = right = middle - 1;
  }

  return -1;
}

binarySearch(numList, 8); // 4
binarySearch(numList, 7); // -1
