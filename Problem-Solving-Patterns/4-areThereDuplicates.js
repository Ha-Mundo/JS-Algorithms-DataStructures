/////// Frequency Counter / Multiple Pointers Coding Exercise 4: - areThereDuplicates  /////////////

// Implement a function called, areThereDuplicates  which accepts a variable number of arguments, and
// checks whether there are any duplicates among the arguments passed in. You can solve this using the
// frequency counter pattern OR the multiple pointers pattern.

////////   Frequency Counter solution //////////
function areThereDuplicates(...args) {
  let frequencyCounter = {};

  for (let value of args) {
    frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
  }
  for (key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c", "a")); // true;
console.log(areThereDuplicates("a", "b", "c", "d")); // false
