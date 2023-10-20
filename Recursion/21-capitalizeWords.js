///////// Recursion Coding Exercise 21: capitalizeWords //////////////////////////

// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  let result = [];

  if (!arr.length) return result;

  result.push(arr[0].toUpperCase());

  return [...result, ...capitalizeWords(arr.slice(1))];
}

const words = ["i", "am", "learning", "recursion"];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
