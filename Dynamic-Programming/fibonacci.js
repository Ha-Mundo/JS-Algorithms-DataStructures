/* Fibonacci
 Write a recursive function called fib which accepts a number and returns the the number in the Fibonacci sequence using Dynamic Programming approach. 
 Recall that the Fibonacci sequence is the sequence of whole numbers 0, 1, 1, 2, 3, 5, 8, ... which starts with 0 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

 0, 1, 2, 3, 4, 5, 6, 7 <-- numbers
 0, 1, 1, 2, 3, 5, 8, 13 <-- fibonacci numbers
 */

// Brute Force

// Time Complexity O(2^n) <-- This is Bad
function fibBF(num) {
    if (num < 2) return num;
    return fibBF(num - 1) + fibBF(num - 2);
}
console.log(fibBF(10)); // 55

////////////////// Dynamic Programming Approach //////////////////////

// Top-down approach - Memoization <-- Can run into stack overflow with large numbers

// Time Complexity O(n)
// Space Complexity O(n)
function fibTD(num, memo = []) {
    if (memo[num]) return memo[num];
    if (num < 2) return num;

    let res = fibTD(num - 1, memo) + fibTD(num - 2, memo);
    memo[num] = res;
    return res;
}

console.log(fibTD(1000)); // 4.346655768693743e+208
// console.log(fibTD(10000)); // RangeError: Maximum call stack size exceeded


// Bottom-up approach - Tabulation <-- Faster and better than the Top-Down approach cause it doesn't rely on recursion and takes less memory space.

// Time Complexity O(n)
// Space Complexity O(1)
function fibBU(num) {
    if (num < 2) return num;
    const fibNums = [0, 1, 1];

    for (let i = 3; i <= num; i++) {
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[num]
}

console.log(fibBU(1000)); // 4.346655768693743e+208
console.log(fibBU(10000)); // Infinity


