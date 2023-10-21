///////////  Recursion Coding Exercise 22: stringifyNumbers   ///////////////////

// Write a function called stringifyNumbers  which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this! Do not change original obj.

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  let newObj = { ...obj };

  for (let key in newObj) {
    if (typeof newObj[key] === "number") newObj[key] += "";
    if (typeof newObj[key] === "object" && !Array.isArray(newObj[key]))
      newObj[key] = stringifyNumbers(newObj[key]);
  }

  return newObj;
}

stringifyNumbers(obj);
/* 
{
  num: '1',
  test: [],
  data: {
    val: '4',
    info: {
      isRight: true,
      random: '66',
    },
  },
};
*/
