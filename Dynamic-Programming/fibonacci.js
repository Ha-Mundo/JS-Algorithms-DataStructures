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


