/* Fibonacci
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence using Dynamic Programming approach.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

// Brute Force
// THIS IS BAD. O(2^) Time Complexity
function fibBF(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }