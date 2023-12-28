/*
 Write a function called stairs which accepts n number of stairs. Imagine that a person is standing at the bottom of the stairs and wants to reach the top and the person can climb either 1 stair or 2 stairs at a time. Your function should return the number of ways the person can reach the top by only climbing 1 or 2 stairs at a time. 
 Use Dynamic Programming approach.
 */

// Brute Force

// Time Complexity O(2^n)
function stairsBF(num) {
    if(num < 3) return num
    return stairsBF(num - 1) + stairsBF(num - 2)
}

console.log(stairsBF(4)); // 5

////////////////// Dynamic Programming Approach //////////////////////

// Top-down approach - Memoization

// Time Complexity O(n)
// Space Complexity O(n)
function stairsTD(num, memo = []) {
    if(memo[num]) return memo[num]
    if(num < 3) return num

    memo[num] = stairsTD(num - 1, memo) + stairsTD(num - 2, memo)

    return memo[num]
}

console.log(stairsTD(4)); // 5

