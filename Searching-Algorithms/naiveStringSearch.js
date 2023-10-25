// ///////////// Search Coding Exercise 26: Naive String Search Implementation //////////////

// Write a function which accepts a string and a pattern, and counts the number of times the pattern appears in the string.

// Time Complexity - O(n * m)

function naiveStringSearch(longStr, shortStr) {
  let counter = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) break;
      if (j === shortStr.length - 1) counter++;
    }
  }

  return counter;
}

console.log(naiveStringSearch("ololazlol", "lol")); // 2
