// /////////////  Search Coding Exercise 24: Linear Search Exercise //////////////

// Write a function called linearSearch  which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!

// Time Complexity - O(n)

let array = [1, 2, 3, 4, 5];

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

linearSearch(array, 5); // 4
linearSearch(array, 7); // -1
