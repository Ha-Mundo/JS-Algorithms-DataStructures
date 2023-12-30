/* 
Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.
Use Dynamic Programming approach.
*/

// Brute Force

// Time Complexity exponential
// Space Complexity O(1)
function coinChangeBF(denominations, value) {
    let index = denominations.length -1;
  
    function change(denominations, value, index) {
      if(value < 0 || index < 0) return 0;
      if(value === 0) return 1;
  
      return change(denominations, value - denominations[index], index) + change(denominations, value, index - 1);
    }
  
    return change(denominations, value, index);
  }
  
  console.log(coinChangeBF([1, 5, 10, 25], 50)); // 49
  console.log(coinChangeBF([1, 5, 10, 25], 7)); // 2

  ///////////////////////////////////// Dynamic Programming ///////////////////////////////////////

// Top-down approach - Memoization

// Time Complexity O(value * denominations.length)
// Space Complexity O(value * denominations.length)

function coinChangeTD(denominations, value) {
    const index = denominations.length - 1;
    const memo = {};

    function change(denominations, value, index) {
        if (value < 0 || index < 0) return 0;
        if (value === 0) return 1;
        
        const key = `${index}/${value}`;
        
        if (memo[key]) return memo[key];
        
        memo[key] = change(denominations, value - denominations[index], index) +
        change(denominations, value, index - 1);
        
        console.log(memo);
      return memo[key];
    }
  
    return change(denominations, value, index);
  }

console.log(coinChangeTD([1, 5, 10, 25], 14000)); // 367633141
