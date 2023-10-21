////////////  Recursion Coding Exercise 23: collectStrings /////////////

/// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let stringArr = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr = stringArr.concat(collectStrings(obj[key]));
    // if (typeof obj[key] === "object") stringArr.push(...collectStrings(obj[key])) // <-- Instead concat with recursion you can also use push + spread operators and recursion
  }
  return stringArr;
}

collectStrings(obj); // [ 'foo', 'bar', 'baz' ]
