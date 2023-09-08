const findTheDuplicateInArray = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] === arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
};

let array = [1, 2, 2, 3, 4, 5, 5, 7];

console.log(findTheDuplicateInArray(array));
