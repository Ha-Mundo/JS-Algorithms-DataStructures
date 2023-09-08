/////////////// Frequency Counter Coding Exercise 1: - validAnagram //////////////////////////////

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
// formed from iceman.

function validAnagram(str1, str2) {
  // return false if the length of the strings are different
  if (str1.length !== str2.length) {
    return false;
  }
  //create a empty lookup object
  let lookup = {};
  //loop trough the 1st string and update the lookup object with the string letters and the value frequency
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    console.log(letter);
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);
  // loop trough the second string
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    console.log(letter);
    // if can't find letter or the letter is 0 is not an anagram otherwise remove 1 from the letter value
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagrams", "nagaramm"));
