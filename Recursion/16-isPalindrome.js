/////// Recursion Coding Exercise 16: isPalindrome //////////////////////

//Write a recursive function called isPalindrome which returns true if the string passes to it is a palindrome (read the same forward and backward). Otherwise return false.

function isPalindrome(str) {
  if (str.length === 0) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

// isPalindrome('tacocat') // true
// isPalindrome('foobar') // false
