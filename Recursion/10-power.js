////////  Recursion Coding Exercise 10: power ///////////////////////

/* Write a function called power which accepts a base and an exponent. The function should return the power
   of the base to the exponent. This function should mimic the functionality of Math.pow()   
   - do not worry about negative bases and exponents. */

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

// power(2, 0) // 1
// power(2, 2); // 4
// power(2, 4) // 16

/* 
    power(2, 4)
    return 2 * power(2, 3)  <-- 2 * 8 = 16
         return 2 * power(2, 2)  <-- 2 * 4 = 8
             return 2 * power(2, 1)  <-- 2 * 2 = 4
                 return 2 * power(2, 0) <-- 2 * 1 = 2
    */
