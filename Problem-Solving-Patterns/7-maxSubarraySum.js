///////// Sliding Window Coding Exercise 7: - maxSubarraySum ///////////

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

/**
Function which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements
in the array.
 **/

function maxSubarraySum(arr, num) {}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([2, -3], 2)); // -1
console.log(maxSubarraySum([2, 3], 3)); // null
