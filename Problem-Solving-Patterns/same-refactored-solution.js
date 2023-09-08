/////////////// Frequency Counter Coding sample: - same//////////////////////////////

//Time Complexity O(n) <--Linear time

/* Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. */

function same(arr1, arr2) {
  //check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // built two empty frequency counter object
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //Loop trough the arr1
  for (let value of arr1) {
    //for each items in the arr1 we are going to add the value 1 if the key is already there otherwise we initialize it to 1
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }
  //Loop trough the arr2
  for (let value of arr2) {
    //for each items in the arr2 we are going to add the value 1 if the key is already there otherwise we initialize it to 1
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  //Loop trough the keys of the frequencyCounter1 object
  for (let key in frequencyCounter1) {
    console.log(key);
    //If no squared key of the frequencyCounter1 object is present in the frequencyCounter2 Object return false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    //Check if the objects keys have the same values frequency --> ex: if there are two 2 in obj1 it need to be two 4 in Obj2
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  //Finally return true if every keys in the frequencyCounter1 object has it's corresponding key squared in the frequencyCounter2 object with the same frequency values as well
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
