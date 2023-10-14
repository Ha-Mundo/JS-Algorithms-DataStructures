///////// Recursion Coding Exercise 12: productOfArray //////////////////

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

///// Helper Method Recursion //////
function productOfArray(arr) {
  let result = 1;

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    result *= helperInput[0];

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

productOfArray([1, 2, 3]); // 6

//// Pure Recursion ////
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return (arr[0] *= productOfArray(arr.slice(1)));
}

productOfArray([1, 2, 3, 10]); //60
/*
1 * productOfArray([2, 3, 10])  <-- 1 * 60 = 60
    2 * productOfArray([3, 10])  <-- 2 * 30 = 60
        3 * productOfArray([10])  <-- 3 * 10 = 30
            10 * productOfArray([])  <-- 10 * 1 = 10
                1
*/
