///////////////// Sliding Window Coding Exercise 9: findLongestSubstring ///////////

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
  let windowStart = 0;
  let lookup = {};
  let maxLen = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];
    // if the letter is already present inside the string shrink the window and move the windowStart pointer to the next index
    if (lookup[char]) {
      windowStart = Math.max(windowStart, lookup[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
    // store the index of the next char so as to not double count
    lookup[char] = windowEnd + 1;
  }
  return maxLen;
}

console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("bbb")); // 1
