//////// Frequency Counter Coding Exercise 3: - sameFrequency //////////////////////

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(num1, num2) {
  let numString1 = num1.toString();
  let numString2 = num2.toString();
  if (numString1.length !== numString2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let value of numString1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }
  for (let value of numString2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    //if(!(frequencyCounter2[key])) return false
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 812)); // true
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(223, 222)); // false
