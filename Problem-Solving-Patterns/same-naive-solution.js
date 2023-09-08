/* Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. */

// Time Complexity - O(N^2) <--Quadratic relationship
function same(arr1, arr2) {
  //check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop trough all items of the arr1
  for (let i = 0; i < arr1.length; i++) {
    //check in the arr2 if is there the squared item of the arr1
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    console.log(correctIndex);
    // if is not present return false
    if (correctIndex === -1) {
      return false;
    }
    //if is present remove from arr2
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  //return true if every value in the array has it's corresponding value squared in the second array.
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
//same([1,2,3], [1,9]) // false
//same([1,2,1], [4,4,1]) // false (must be same frequency)
