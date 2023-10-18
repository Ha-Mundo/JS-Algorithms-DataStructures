/////////// Recursion Coding Exercise 17: someRecursive////////////////////

// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true
// when passed to the callback. Otherwise it returns false.

function someRecursive(arr, callback) {}

someRecursive([1, 2, 3, 4], val => val % 2 !== 0); // true
someRecursive([4, 6, 8, 9], val => val % 2 !== 0); // true
someRecursive([4, 6, 8], val => val % 2 !== 0); // false
someRecursive([4, 6, 8], val => val > 10); // false
