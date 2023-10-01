/* Factorial iterative version

function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
} */

/* Factorial recursive version */

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

/* factorial(5) 
    return 5 * factorial(4)  <-- return 5 * 24 = 120
        return 4 * factorial(3)  <-- return 4 * 6 = 24
            return 3 * factorial(2)  <-- return 3 * 2 = 6
                return 2 * factorial(1)  <-- return 2 * 1 = 2
                    return 1
*/
