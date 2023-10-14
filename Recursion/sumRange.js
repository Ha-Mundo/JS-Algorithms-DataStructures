////// Recursion Coding Exercise 13: sumRange ////////////

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function eg: 6 --> 1 + 2 + 3 + 4 + 5 + 6 = 21

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/*  sumRange(3) // 6
    return 3 + sumRange(2)  <-- return 3 + 3
        return 2 + sumRange(1)  <--  return 2 + 1
            return 1  <-- return 1
 */
