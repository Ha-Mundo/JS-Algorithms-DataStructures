//////////// Sliding Window Coding Exercise 8: - minSubArrayLen ////////////////

// Write a function called minSubArrayLen  which accepts two parameters - an array of positive integers and a positive integer.This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

//Time complexity: O(n)
//Space complexity: O(1)
function minSubArrayLen(nums, sum) {
  let windowSum = 0;
  let windowStart = 0;
  let minLen = Infinity;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    // shrink the window until the windowSum is smaller than sum
    while (windowSum >= sum) {
      minLen = Math.min(minLen, windowEnd - windowStart + 1);
      // subtract the element at the windowStart index
      windowSum -= nums[windowStart];
      // change windowStart to the next element
      windowStart++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

////////////// refactored version ////////////////
function minSubArrayLen(nums, sum) {
  let windowSum = 0;
  let windowStart = 0;
  let windowEnd = 0;
  let minLen = Infinity;

  while (windowStart < nums.length) {
    // if current window doesn't add up to the given sum then move the window to right
    if (windowSum < sum && windowEnd < nums.length) {
      windowSum += nums[windowEnd];
      windowEnd++;
    }
    // if current window adds up to at least the sum given then we can shrink the window
    else if (windowSum >= sum) {
      minLen = Math.min(minLen, windowEnd - windowStart);
      windowSum -= nums[windowStart];
      windowStart++;
    }
    // current windowSum less than required windowSum but we reach the windowEnd, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1, 3, 5], 5)); //////1
console.log(minSubArrayLen([], 44)); /////////0
