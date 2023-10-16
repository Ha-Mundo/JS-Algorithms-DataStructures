///////////// Recursion Coding Exercise 14: fibonacci /////////////////

// Write a recursive function called fib which accepts a number and returns the the number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 0, 1, 1, 2, 3, 5, 8, ... which starts with 0 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

//  0, 1, 2, 3, 4, 5, 6, 7 <-- numbers
//  0, 1, 1, 2, 3, 5, 8, 13 <-- fibonacci numbers

// fib(0) = 0
// fib(1) = 1
// fib(6) = 8

// O(2^n) <-- using recursion is not the best solution for fibonacci
function fib(num) {
  if (num < 2) return num;

  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); // 3
/* 
                    return fib(4 - 1)                     +                           fib(4 - 2)  
                        return fib(3)                         +                          fib(2)
                            return fib(3 - 1)       +           fib(3 - 2)                 return fib(2 - 1) + fib(2 - 2)
                                return fib(2 - 1) + fib(2 - 2)

*/
