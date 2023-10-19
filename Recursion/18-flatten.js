///////// Recursion Coding Exercise 18: flatten //////////////////////////

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  let flattenArray = [];

  for (el of arr) {
    if (Array.isArray(el)) {
      flattenArray = flattenArray.concat(flatten(el));
    } else {
      flattenArray.push(el);
    }
  }
  return flattenArray;
}

// Refactored version
/* 
function flatten(arr){
    let flattenArray = []
    arr.forEach(el => Array.isArray(el) ? flattenArray = flattenArray.concat(flatten(el)) : flattenArray.push(el));
    return flattenArray
} */

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1, 2, 3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1, 2, 3]

//Ps: for projects or applications use the built-in method flat eg: -->  arr.flat(Infinity)
