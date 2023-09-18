/////// Multiple Pointers Coding Exercise 6: - isSubsequence //////////

//Takes in two strings and checks whether the characters in the first string form a subsequence of characters in the second string. The function should check whether characters in the first string appear somewhere in the second string, without their order changing

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M) <-- If M is the length of message and N is the length of letters
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("", "cat")); // true
